import React from ' react';



const CartContext = React.CreateContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})


export default CartContext;