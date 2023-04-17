import { useContext } from 'react';
import { Card } from '../Card/Card';
import './index.css';
import { CardContext } from '../../context/cardContext'

export const CardList = () => {

  const { cards, setParentCounter, handleProductLike } = useContext(CardContext)

  return (
    <div className='cards'>
      {cards.map((item) => {
        return (
          <Card
            product={item}
            onProductLike={handleProductLike}
            setParentCounter={setParentCounter}
            {...item}
            key={item._id}
          />
        );
      })}
    </div>
  );
};
