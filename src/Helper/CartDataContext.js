
import React, { useContext} from "react";

const CartData = React.createContext();

const CartDataSet = React.createContext();

const CartLength = React.createContext();

const CartLengthSet = React.createContext();



export function useCartData(){
    return useContext(CartData);
}

export function useCartDataDelFunction(){
    return useContext(CartDataSet);
}


export function useCartLength(){
    return useContext(CartLength);
}

export function useCartLengthSet(){
    return useContext(CartLengthSet);
}


function CartDataContext({children}){
    
    const [cart,setCartData] = React.useState([]);

    let [cartLength,setCartLength] = React.useState(0);

    function delItemFromCart(id){
        setCartData(ele => {
            return ele.filter(item => item.itemId !== id)
        });
        setCartLength(cart.length-1)
        }
    return(
        <CartData.Provider value={cart}>
        <CartDataSet.Provider value={delItemFromCart}>
        <CartLength.Provider value={cartLength}>
        <CartLengthSet.Provider value={setCartLength}>
        {children}
        </CartLengthSet.Provider>
        </CartLength.Provider> 
        </CartDataSet.Provider>
        </CartData.Provider>
    )
}

export default CartDataContext;