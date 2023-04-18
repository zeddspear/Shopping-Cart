import React from 'react'


function QuantityHandler({delItemFromCart,ele,cartData,calculateTotal}) {


    const [quantity,setQuantity] = React.useState(ele.itemQuantity);

    function increase(){
        setQuantity(prev => prev+1)
        ele.itemQuantity = ele.itemQuantity + 1;
    }   

    function decrease(){
        if(quantity > 1){
        setQuantity(prev => prev-1)
        ele.itemQuantity = ele.itemQuantity - 1;
        }
    }  

    function valueChangeIncrease(){
      calculateTotal();
    }

    function valueChangeDecrease(){
      calculateTotal();
  }

  return (
    <>
    <button className='btn btn-decreaseCart' onClick={() => {decrease(); valueChangeDecrease();}}>-</button>
    <span>{quantity}</span>
    <button className='btn btn-increaseCart' onClick={() => {increase(); valueChangeIncrease();}}>+</button>
    <button className='btn delete-btn' onClick={() => delItemFromCart(ele.itemId)}>Delete</button>
    </>
  )
}

export default QuantityHandler
