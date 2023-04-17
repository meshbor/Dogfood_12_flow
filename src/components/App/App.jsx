import React, { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css';
import { api } from '../../utils/api';
import { useDebounce } from '../../utils/utils';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ProductPage } from '../../pages/ProductPage/ProductPage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';
import { UserContext } from '../../context/userContext'
import { CardContext } from '../../context/cardContext'


function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [parentCounter, setParentCounter] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  const filteredCards = (products, id) => products.filter((e) => e.author._id === id);
  const handleSearch = (search) => {
    api.searchProducts(search).then((data) => setCards(filteredCards(data, currentUser._id)));
  };


  const debounceValueInApp = useDebounce(searchQuery, 500);


  function handleProductLike(product) {
    const isLiked = product.likes.some((el) => el === currentUser._id);
    isLiked
      ? api.deleteLike(product._id).then((newCard) => {
        const newCards = cards.map((e) =>
          e._id === newCard._id ? newCard : e
        );
        setCards(filteredCards(newCards, currentUser._id));
      })
      : api.addLike(product._id).then((newCard) => {
        const newCards = cards.map((e) =>
          e._id === newCard._id ? newCard : e
        );
        setCards(filteredCards(newCards, currentUser._id));
      });
  }

  useEffect(() => {
    if (debounceValueInApp === undefined) return;
    handleSearch(debounceValueInApp);
  }, [debounceValueInApp]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getProductList()]).then(
      ([userData, productData]) => {
        setCurrentUser(userData);
        setCards(filteredCards(productData.products, userData._id));
      }
    );
  }, []);


  const navigate = useNavigate();

  const someFunc = (data) => {
    console.log(data)
  }
  const setSortCards = (sort) => {
    console.log(sort)
    if (sort === 'cheapest') {
      const newCards = cards.sort((a,b)=> a.price - b.price);
      setCards([...newCards]);
    }
    if (sort === 'richest') {
      const newCards = cards.sort((a,b)=> b.price - a.price);
      setCards([...newCards]);
    }
    if (sort === 'popular') {
      const newCards = cards.sort((a,b)=> b.likes.length - a.likes.length);
      setCards([...newCards]);
    }
    if (sort === 'newest') {
      const newCards = cards.sort((a,b)=> new Date(a.created_at) - new Date(b.created_at));
      setCards([...newCards]);
    }
  }
  

  const contextValue = { setSort: setSortCards, currentUser, searchQuery, setSearchQuery, setParentCounter, parentCounter }
  const contextCardValue = { cards:cards, setParentCounter, handleProductLike, onClickCard: someFunc }

  //  history.go(2)
  return (
    <>
      <UserContext.Provider value={contextValue}>
        <CardContext.Provider value={contextCardValue}>
          <Header />
          <main className='content container'>
            <Routes>
              <Route
                path='/'
                element={
                  <CatalogPage />
                }
              ></Route>
              <Route path='product/:productId' element={<ProductPage />}>
              </Route>
              <Route path='fakeRout/:productId' element={<ProductPage />}>
              </Route>
              <Route path='*' element={<div>404 no found <button onClick={() => navigate('/')}>Home</button></div>}>
              </Route>
            </Routes>

          </main>
          <Footer />
        </CardContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
// useEffect - для побочных действий
// useEffect(()=>{}) - update на каждое изменение компонента.
// useEffect(()=>{},[state]) - update на каждое изменение конкретного state.
// useEffect(()=>{},[]) - update в самом начале

// Чистая функция - это функция , которая при одних и тех же входных параметрах возвращает одинаковый результат.

// <BrowserRouter>
//  <Routes>
//   <Route path="/" element={<Dashboard />}>
//   <Route path="product" element={<AboutPage />} />
// </Routes> 
// </BrowserRouter>
