/**Product to cart will be same as the elements that are present in our local storage*/

import { createProductCart } from "./ProductCart.js";
import { createHorizontalProductCard } from "./new.js";
import {createHorizontalCard} from "./createHorizontalCard.js"
import { findProductInCart } from "./findProductInCart.js";

let cartConatiner = document.getElementById("cart"); //this is the parent container that we want to manipulate by adding selected items to cart using local storage
let wishlistContainer = document.getElementById("wishlist");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) ||[];
console.log(cart);

cartConatiner.addEventListener("click", (event)=>{

    if(event.target.innerText === "Save To Wishlist"){
        
        wishlist = cart.filter(({_id})=> _id === event.target.dataset.id);
        localStorage.setItem("wishlist",JSON.stringify(wishlist) );

        createProductCart(wishlist,wishlistContainer, findProductInCart, "wishlist");


    }else{
    cart = cart.filter(({_id})=> _id!== event.target.dataset.id);
    localStorage.setItem("cart", JSON.stringify(cart));

    /**This Logic we wrote in order to remove the elements when we click on remove without having 
     * to refresh the page
    */
    cartConatiner.innerHTML="";
    createHorizontalCard(cart,cartConatiner);}

     
    
})


createHorizontalCard(cart,cartConatiner);
// createProductCart(wishlist, wishlistContainer);

/**Number of Products i cart */

const productsInCart = document.querySelector(".item-count"); 
productsInCart.innerText = JSON.parse(localStorage.getItem("cart")).length;

/**Adding the price to the products */

const TotalPrice = document.querySelector(".item-price");
const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=> acc+cur.oldPrice, 0);
TotalPrice.innerText = priceBeforeDiscount

const discount = document.querySelectorAll(".discount-total");
const priceAfterDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=> acc+cur.newPrice,0);

const totalDiscount = priceBeforeDiscount - priceAfterDiscount;

for(let element of discount){
    element.innerText = totalDiscount
}


/**Adding the Total Amount */

const totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount +100;

const placeOrder = document.querySelector(".placeorder");
placeOrder.addEventListener("click", ()=>{
    
    location.href = "./placeOrder.html";    
})

