export let findProductInCart =(cart, prodId)=>{
    const isProductInCart = cart && cart.length>0 && cart.some(({_id})=> _id === prodId)
    //basically checking the cart is not undefined, cart length is >0 
    //and checking it the id is presnt in cart or not
    return isProductInCart;
}
