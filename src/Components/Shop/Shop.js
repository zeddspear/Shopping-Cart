import React from 'react'
import shopData from '../ShopData'
import './Shop.css'
import { Link } from 'react-router-dom';
import Card from './Card';

function Shop() {

const [items] = React.useState(shopData);



const cards = items.map(item =>{
  return <Link to={`/shop/${item.itemId}`} key={item.itemId}>
              <Card name={item.itemName}
                    description={item.description}
                    price={item.itemPrice}
                    picture={item.itemPic}  />
          </Link>
})

  return (
    <div className='Shop'>
    <h1>Figures</h1>
    <div className='cardsDiv' >
      {cards}
    </div>
    </div>
  )
}

export default Shop
