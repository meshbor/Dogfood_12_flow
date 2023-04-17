import s from './index.module.css';
import truck from './img/truck.svg';
import quality from './img/quality.svg';
import cn from 'classnames';
import { ReactComponent as Save } from './img/save.svg';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import { useLocation, useMatches, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export const Product = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    api.getProductById(id).then((data) => setProduct(data));
  }, [id]);

  const navigate = useNavigate();

  const currentUser = useContext(UserContext);
  const isLiked = product?.likes?.some((el) => el === currentUser._id);

  // const clicker = () => {
  //   api.addLike().catch((res) =>
  //       res.status === 403 ?   navigate('/') : navigate('/login')
  //   )
  // }
  const location = useLocation();
  const params = useParams();
  // const matches = useMatches();


  console.log({ navigate, location, params });

  useEffect(()=>{
    if (location.search.includes('budget=3000')) {
      // navigate('/part1')
      // alert('you are really rich man');
    }
  },[]);

  // useEffect(()=>{
  //   if (params.productId) {
  //     navigate(`/product/${params.productId}`)
  //     // alert('you are really rich man');
  //   }
  // },[params.productId]);

  return (
    <>
      <div className={s.product}>
        <div className={s.imgWrapper}>
          <img className={s.img} src={product.pictures} alt={`Изображение`} />
          {product.tags?.map((e) => (
            <span className={`tag tag_type_${e}`}>{e}</span>
          ))}
        </div>
        <div className={s.desc}>
          <span className={s.price}>{product.price}&nbsp;₽</span>
          {!!product.discount && (
            <span className={`${s.price} card__price_type_discount`}>
              {product.discount}&nbsp;%
            </span>
          )}
          <div className={s.btnWrap}>
            <div className={s.left}>
              <button className={s.minus}>-</button>
              <span className={s.num}>0</span>
              <button className={s.plus}>+</button>
            </div>
            <button className={`btn btn_type_primary ${s.cart}`} onClick={() => navigate('/product/63ecf77059b98b038f77b65f')}>
              В корзину
            </button>
          </div>
          <button className={cn(s.favorite, { [s.favoriteActive]: isLiked })}>
            <Save />
            <span>{isLiked ? 'В избранном' : 'В избранное'}</span>
          </button>
          <div className={s.delivery}>
            <img src={truck} alt='truck' />
            <div className={s.right}>
              <h3 className={s.name}>Доставка по всему Миру!</h3>
              <p className={s.text}>
                Доставка курьером — <span className={s.bold}>от 399 ₽</span>
              </p>
            </div>
          </div>
          <div className={s.delivery}>
            <img src={quality} alt='quality' />
            <div className={s.right}>
              <h3 className={s.name}>Доставка по всему Миру!</h3>
              <p className={s.text}>
                Доставка курьером — <span className={s.bold}>от 399 ₽</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.box}>
        <h2 className={s.title}>Описание</h2>
        <div>{product.description}</div>
        <h2 className={s.title}>Характеристики</h2>
        <div className={s.grid}>
          <div className={s.naming}>Вес</div>
          <div className={s.description}>1 шт 120-200 грамм</div>
          <div className={s.naming}>Цена</div>
          <div className={s.description}>490 ₽ за 100 грамм</div>
          <div className={s.naming}>Польза</div>
          <div className={s.description}>
            <p>
              Большое содержание аминокислот и микроэлементов оказывает
              положительное воздействие на общий обмен веществ собаки.
            </p>
            <p>Способствуют укреплению десен и жевательных мышц.</p>
            <p>
              Развивают зубочелюстной аппарат, отвлекают собаку во время смены
              зубов.
            </p>
            <p>
              Имеет цельную волокнистую структуру, при разжевывание получается
              эффект зубной щетки, лучше всего очищает клыки собак.
            </p>
            <p>Следует учесть высокую калорийность продукта.</p>
          </div>
        </div>
      </div>
    </>
  );
};
