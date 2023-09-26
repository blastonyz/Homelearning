import {createContext,useState  } from "react";

export const CartContext = createContext({
      cart: []
})

export const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([])
   

    const addItem = (item) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev,{...item}])
            console.log('atrodem')
        }else{
            console.error('el producto ya fue agregado')
            console.table(cart)
          
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const cleanCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const cantidadTotal = () => {
        const added =!cart.length?0:(cart.length)
       return added
    }

    
    


    return(
        <CartContext.Provider value={{cart,addItem,removeItem,cleanCart,cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
}

/*cart.reduce((acc,prod) => (acc +=  prod.cantidad),0)*/