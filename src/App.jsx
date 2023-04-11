import "./App.css";
import { CardList } from "./components/CardList/CardList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header myTitle={'Title'} email='someemail@mdmd.ru' exampleArray={['asd', '2', '3']}></Header>
      <CardList properties={['hello']} />
      <Footer />
    </div>
  );
}

export default App;
