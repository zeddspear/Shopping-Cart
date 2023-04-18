import React, { useEffect } from 'react'
import './ShoppingCart.css'
import { useCartData , useCartDataDelFunction } from '../../Helper/CartDataContext'
import QuantityHandler from './QuantityHandler';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function ShoppingCart() {

const delItemFromCart = useCartDataDelFunction();


const cartData = useCartData();
  
const [itemsOnCartCheck , setItemsOnCartCheck] = React.useState(true);

const [total,setTotal] = React.useState(0);



useEffect(()=>{
  if(cartData.length === 0){
    setItemsOnCartCheck(false);
  }else{
    setItemsOnCartCheck(true);
  }
  calculateTotal();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
},[cartData])


// using reduce function for calculating total
function calculateTotal(){
  let total_price = cartData.reduce((initialVal,curEle) =>{
    let {itemPrice,itemQuantity} = curEle;

    initialVal = initialVal + itemPrice * itemQuantity;

    return initialVal;

  },0)
  setTotal(total_price);
}





const onCartItems = cartData.map((ele) => {

  return <div className='itemOnCart' key={ele.itemId}>
  <div className='left'>
    <LazyLoadImage effect='blur' src={require(`../../Assets/figuresImgs/${ele.itemPic}`)} alt='itemPic' className='itemOnCartPic' />
  </div>
  <div className='right'>
  <h4 className='itemNameOnCart'>{ele.itemName}</h4>
  <p>{ele.description}</p>
  <div className='itemQuantityCart'>
  <QuantityHandler 
    delItemFromCart={delItemFromCart}
    ele={ele}
    cartData={cartData}
   calculateTotal={calculateTotal}
  />
  </div>
</div>
</div>
})


  return (
    <div className='shoppingCart'>
        <div className='cartDiv'>
          <div className='onCart'>
          { itemsOnCartCheck ? onCartItems : 
          <div className='emptyOnCart'><h3 className='emptyCart'>Your Cart is Empty!</h3></div>}
          </div>
          <div className='checkoutDiv'>
            <h1 className='checkoutHead'>Payment</h1>
            <span className='checkoutData'>Products Value: <span className='productValue'>Rs {total}</span></span> 
            <br/>
            <span className='checkoutData'>Delivery: <span className='deliveryValue'>Free</span></span>
            <br/>
            <hr/>
            <span className='checkoutData'>Total: <span className='totalValue'>Rs {total}</span></span> 
            <br/>
            <button className='btn checkout-btn' onClick={()=>{alert("Wow you really liked it ig that's why you are stil here, Thanks :)")}}>CheckOut</button>           
          </div>
        </div>
    </div>
  )
}

export default ShoppingCart
