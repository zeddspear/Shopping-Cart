/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './Item.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import shopData from '../ShopData'
import { useParams } from 'react-router-dom'
import { useCartData , useCartLengthSet  } from '../../Helper/CartDataContext'



function Item() {

const cartData = useCartData();

const cartLengthSet = useCartLengthSet();

const params = useParams();

const [quantity,setQuantity] = React.useState(1);

const [items] = React.useState(shopData)

const [item,setItem] = React.useState({
        itemId : "",
        itemName: "",
        itemPic: "",
        description: "" ,
        itemPrice: 0,
        itemQuantity: 1
});

useEffect(()=>{
  
    fetchItem();
    
},[])


function increaseQuantity(){
  setQuantity(quantity => quantity+1);
  setItem(prevItem => {
    return {...prevItem,
            itemQuantity : quantity+1}
  })
}

function decreaseQuantity(){
  if(quantity > 1) {
    setQuantity(quantity => quantity-1);
    setItem(prevItem => {
      return {...prevItem,
              itemQuantity : quantity-1}
    })
  }
}


// add to cart function
function clickAddToCart(item){



    if(cartData.length === 0 || cartData.every(ele => ele.itemId !== item.itemId)){
    cartData.push(item);
  }else{
    cartData.every(ele => {
      if(ele.itemId === item.itemId){
        ele.itemQuantity = ele.itemQuantity + quantity;
      }
      return true;
    })
  }

}

// for fetching item from array of with same id as selected item id
function fetchItem(){

  items.filter(function(ele){
    if(ele.itemId === params.itemId)
    {
      setItem(oldEle => {
        return {
        ...oldEle,
        itemId : ele.itemId,
        itemName: ele.itemName,
        itemPic: ele.itemPic,
        description: ele.description,
        itemPrice: ele.itemPrice
        }
      })
    }
    return undefined;
  })
}


  return (
    <div className='item'>

    <div className='item-left' >
    {item.itemPic && <LazyLoadImage effect='blur' src={require(`../../Assets/figuresImgs/${item.itemPic}`)} alt='itemPic' className='itemPic' />} 
    </div>

    <div className='item-right'>
        <h1 className='itemName' >{item.itemName}</h1>
        <p className='itemDescription'>{item.description}</p>
        <span className='itemPrice' >Price: Rs {item.itemPrice}</span>
        <br/>
        <div className='itemQuantity'>
          <button className='btn btn-decrease' onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button className='btn btn-increase'  onClick={increaseQuantity}>+</button>
        </div>
        <br/>
        <button className='addToCart' onClick={() => {clickAddToCart(item); cartLengthSet(cartData.length) }} >Add to Cart</button>
    </div>
      
    </div>
  )
}

export default Item
