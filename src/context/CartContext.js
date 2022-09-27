import React, {useState, createContext, Children } from 'react'

export const CartContext = createContext();

export function CartProvider ({children}) {

    const [items, setItems] = useState([])

    function addItem(item, quantity) {
        if (isInCart(item.id)){
            let aux = item;
            let itemIndex = aux.indexOf((element) => element.id === item.id);
            aux[itemIndex].quantity += quantity;
            setItems(aux); 
        }else {
            setItems([...items,{...item, quantity}])
        }
    }

    function removeItem(itemId){
        setItems(items.filter((item) => item.id !== itemId))
    }

    function clearCart(){
        setItems([]);
        
    }

    function isInCart(itemId){
        if(!items){
            return items.some((element) => element.id == itemId);
        } else {
            return false
        }
        
    }


    return (
        <CartContext.Provider value={{addItem, removeItem, clearCart, items}}>
            {children}
        </CartContext.Provider>
    )
}
