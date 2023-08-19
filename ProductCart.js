
/**This is we are making another function as it will be reused again and again by wishlist and cart JS*/
import {findProductInCart} from "./findProductInCart.js";

export const createProductCart =(products,parentElement, findProductInCart, productType) =>{
    for(let product of products){
        let cardContainer = document.createElement("div")
        cardContainer.classList.add("card", "card-vertical" ,"d-flex","direction-column", "relative", "shadow");
        /** Image Container*/
        /**iT'S Inside a div in the html*/
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-container");
        let image = document.createElement("img")
        image.classList.add("card-image");
        image.setAttribute("src", product.img); //dynamic role
        image.setAttribute("alt", product.name);
    
        imageContainer.appendChild(image)
    
        /**Card Details*/
        let detailsContainer = document.createElement("div");
        detailsContainer.classList.add("card-details");
        // detailsCntainer.style.flexDirection = "column";
    
        let brand = document.createElement("div");
        brand.classList.add("card-title");
        brand.innerText = product.brand
        detailsContainer.appendChild(brand);
    
        /**Card Description*/
    
        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");
        descriptionContainer.appendChild(brand)
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);
    
        let price = document.createElement("p");
        price.classList.add("card-price", "d-flex", "align-end", "gap-sm")
        price.innerText = `Rs.${product.newPrice}`;
        descriptionContainer.appendChild(price)
    
        let PreviousPrice = document.createElement("span");
        PreviousPrice.classList.add("price-strike-through")
        PreviousPrice.innerText = `Rs.${product.oldPrice}`
        price.appendChild(PreviousPrice);
    
        let discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText = `(${product.discount}% OFF)`
        price.appendChild(discount);
        descriptionContainer.appendChild(price)
    
        /**Ratings*/
    
        let Ratings = document.createElement("p");
        Ratings.classList.add("d-flex", "align-center");
        let Rating = document.createElement("span");
        Rating.innerText = product.rating;
        Ratings.appendChild(Rating);
    
        let star = document.createElement("span");
        star.classList.add("material-icons-outlined", "star");
        star.innerText = "star";
        Ratings.appendChild(star);
    
        descriptionContainer.appendChild(Ratings)
    
        /**CTA Button*/
        /**Remember that appendchild should always be in order*/
    
        let ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn");
    
        let cartButton = document.createElement("button");
        cartButton.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
        
    
        let cart = document.createElement("span");
        cart.classList.add("material-icons-outlined");
        cart.innerText = "shopping_cart";
        cartButton.setAttribute("data-id", product._id);
        cartButton.appendChild(cart);
    
        let ButtonText = document.createElement("span");
        const isProductInCart = findProductInCart(JSON.parse(localStorage.getItem("cart")), product._id);
        ButtonText.innerText = productType === "cart"? "Remove": productType === "product"&& isProductInCart? "Go To Cart": "Add To Cart        ";
        cartButton.appendChild(ButtonText)
    
        ctaButton.appendChild(cartButton);
        detailsContainer.appendChild(ctaButton);
        
    
        //we have to append the below to the container to
        //make them childs of the parent containers
    
        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(descriptionContainer);
        cardContainer.appendChild(detailsContainer);
        // cardContainer.appendChild(descriptionContainer);
    
    
    
    
        parentElement.appendChild(cardContainer);
    }
}