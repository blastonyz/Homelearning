import {createContext,useState  } from "react";

export const CartContext = createContext({
      cart: []
})

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    console.log(cart)

    const addItem = (item) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev,{...item}])
        }else{
            console.error('el producto ya fue agregado')
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
        if (cart.lenght >= 0) {
            return (  
                cart.length + 1      
            )
         
        }
     
    }


    return(
        <CartContext.Provider value={{cart,addItem,removeItem,cleanCart,cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )
}

/*cart.reduce((acc,prod) => (acc +=  prod.cantidad),0)*/