import { products } from "./db/project.js";
import { createProductCart } from "./ProductCart.js";
import {findProductInCart} from "./findProductInCart.js";

let productContainer = document.getElementById("product");
let filterContainer = document.querySelector(".filter-container");
let discountContainer = document.querySelector(".discount-container")

/**Cart Array to store the cart elements */
let cart =[];

// let findProductInCart =(cart, prodId)=>{
//     const isProductInCart = cart && cart.length>0 && cart.some(({_id})=> _id === prodId)
//     //basically checking the cart is not undefined, cart length is >0 
//     //and checking it the id is presnt in cart or not
//     return isProductInCart;
// }

// for(let product of products){
//     let cardContainer = document.createElement("div")
//     cardContainer.classList.add("card", "card-vertical" ,"d-flex","direction-column", "relative", "shadow");
//     /** Image Container*/
//     /**iT'S Inside a div in the html*/
//     let imageContainer = document.createElement("div");
//     imageContainer.classList.add("card-image-container");
//     let image = document.createElement("img")
//     image.classList.add("card-image");
//     image.setAttribute("src", product.img); //dynamic role
//     image.setAttribute("alt", product.name);

//     imageContainer.appendChild(image)

//     /**Card Details*/
//     let detailsContainer = document.createElement("div");
//     detailsContainer.classList.add("card-details");
//     // detailsCntainer.style.flexDirection = "column";

//     let brand = document.createElement("div");
//     brand.classList.add("card-title");
//     brand.innerText = product.brand
//     detailsContainer.appendChild(brand);

//     /**Card Description*/

//     let descriptionContainer = document.createElement("div");
//     descriptionContainer.classList.add("card-description");
//     descriptionContainer.appendChild(brand)
//     const name = document.createElement("p");
//     name.classList.add("card-des");
//     name.innerText = product.name;
//     descriptionContainer.appendChild(name);

//     let price = document.createElement("p");
//     price.classList.add("card-price", "d-flex", "align-end", "gap-sm")
//     price.innerText = `Rs.${product.newPrice}`;
//     descriptionContainer.appendChild(price)

//     let PreviousPrice = document.createElement("span");
//     PreviousPrice.classList.add("price-strike-through")
//     PreviousPrice.innerText = `Rs.${product.oldPrice}`
//     price.appendChild(PreviousPrice);

//     let discount = document.createElement("span");
//     discount.classList.add("discount");
//     discount.innerText = `(${product.discount}% OFF)`
//     price.appendChild(discount);
//     descriptionContainer.appendChild(price)

//     /**Ratings*/

//     let Ratings = document.createElement("p");
//     Ratings.classList.add("d-flex", "align-center");
//     let Rating = document.createElement("span");
//     Rating.innerText = product.rating;
//     Ratings.appendChild(Rating);

//     let star = document.createElement("span");
//     star.classList.add("material-icons-outlined", "star");
//     star.innerText = "star";
//     Ratings.appendChild(star);

//     descriptionContainer.appendChild(Ratings)

//     /**CTA Button*/
//     /**Remember that appendchild should always be in order*/

//     let ctaButton = document.createElement("div");
//     ctaButton.classList.add("cta-btn");

//     let cartButton = document.createElement("button");
//     cartButton.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
    

//     let cart = document.createElement("span");
//     cart.classList.add("material-icons-outlined");
//     cart.innerText = "shopping_cart";
//     cartButton.setAttribute("data-id", product._id);
//     cartButton.appendChild(cart);

//     let ButtonText = document.createElement("span");
//     ButtonText.innerText = "Add to Cart";
//     cartButton.appendChild(ButtonText)

//     ctaButton.appendChild(cartButton);
//     detailsContainer.appendChild(ctaButton);
    

//     //we have to append the below to the container to
//     //make them childs of the parent containers

//     cardContainer.appendChild(imageContainer);
//     cardContainer.appendChild(descriptionContainer);
//     cardContainer.appendChild(detailsContainer);
//     // cardContainer.appendChild(descriptionContainer);




//     productContainer.appendChild(cardContainer);
// }

/**Logic for Add to Cart*/
/**Event Bubbling*/
/**Data Attribute*/

productContainer.addEventListener("click", (event)=>{
    /**We are creating a logic to find if the add to cart was already clicked if yes then don't add product to cart*/
    let isProductInCart = findProductInCart(cart,event.target.dataset.id );
    if(!isProductInCart){
        let productToAddToCart = products.filter(({_id})=> _id === event.target.dataset.id);
        cart = [...cart, ...productToAddToCart];
        /**Storing the cart to local storage*/
        localStorage.setItem("cart", JSON.stringify(cart));
        const cardButton = (event.target);
        cardButton.innerHTML= "Go To Cart <span class='material-icons-outlined'>shopping_cart</span>";
    }else{
        location.href = "./cart.html"; /**else condition states that the product is in the cart, then send the user to cart.html page*/
    }
    
    
})  

filterContainer.addEventListener("click", (event)=>{
    const updatedProducts = products.filter(({rating})=> rating >= Number(event.target.dataset.rating));
    /**We are now setting the productContainer's html to blank so that the entire product page is not
     * re-rendered along with filtered data
     */
    productContainer.innerHTML = "";
    createProductCart(updatedProducts, productContainer, findProductInCart, "product");
})

discountContainer.addEventListener("click", (event)=>{
    const updatedProducts = products.filter(({discount})=> discount >= Number(event.target.dataset.discount));
    productContainer.innerHTML = "";
    createProductCart(updatedProducts, productContainer, findProductInCart, "product");
})



createProductCart(products, productContainer, findProductInCart, "product");
/**It's creating a function  which is referring to the calling html page*/