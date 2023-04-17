import React from 'react';
import {UserContext} from '../../context/userContext';
import { ReactComponent as Like } from './like.svg';


import './index.css';
import { Link } from 'react-router-dom';
// props props.card
export const Card = ({
  product,
  pictures,
  name,
  discount,
  price,
  setParentCounter,
  onProductLike,
}) => {
  const {currentUser} = React.useContext(UserContext);
  
  const isLiked = product.likes.some((el) => el === currentUser._id);
  const handleLikeClick = () => {
    onProductLike(product);
  };
  return (
    <div className='card'>
      <div className='card__sticky card__sticky_type_top-left'>
        <span className='card__discount'>{discount}%</span>
      </div>
      <div className='card__sticky card__sticky_type_top-right'>
        <button
          className={`card__favorite ${isLiked ? 'card__favorite_active' : ''}`}
          onClick={handleLikeClick}
        >
          <Like className='card__liked' />
        </button>
      </div>
      <Link to={`/product/${product._id}`} className='card__link'>
        <img src={pictures} alt='card__image' className='card__image' />
        <div className='card__desc'>
          <span className='card__price'>{price}p</span>
          <span className='card_wight'>1pc</span>
          <p className='card__name'>{name}</p>
        </div>
      </Link>
      <span
        onClick={() => setParentCounter((state) => state + 1)}
        className='card__card btn btn_type_primary'
      >
        В корзину
      </span>
    </div>
  );
};
