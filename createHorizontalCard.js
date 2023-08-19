export const createHorizontalCard = (products, parentElement) =>{
    for(let product of products){
    
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-horizontal", "d-flex", "shadow");
        /**Image Container*/
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-hori-image-container", "relative");
        const image = document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("src", product.img);
        image.setAttribute("alt", product.name);

        imageContainer.appendChild(image);
        cardContainer.appendChild(imageContainer);

        /**Card Description which we can copy from ProductCart.js as it's same*/
        let detailsContainer = document.createElement("div");
        detailsContainer.classList.add("card-details", "d-flex", "direction-column");
    
    
        let brand = document.createElement("div");
        brand.classList.add("card-title");
        brand.innerText = product.brand
        detailsContainer.appendChild(brand);
      
    
        /**Card Description*/
    
        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("card-description");
        descriptionContainer.appendChild(brand)

        /**Product Name*/
        const name = document.createElement("p");
        name.classList.add("card-des");
        name.innerText = product.name;
        descriptionContainer.appendChild(name);

        /**Product Price*/
    
        let price = document.createElement("p");
        price.classList.add("card-price")
        price.innerText = `Rs.${product.newPrice}`;
        descriptionContainer.appendChild(price)
    
        let PreviousPrice = document.createElement("span");
        PreviousPrice.classList.add("price-strike-through");
        PreviousPrice.innerText = `Rs.${product.oldPrice}`
        price.appendChild(PreviousPrice);
    
        let discount = document.createElement("span");
        discount.classList.add("discount", "padding-all-8");
        discount.innerText = `(${product.discount}% OFF)`
        price.appendChild(discount);
        descriptionContainer.appendChild(price)
        detailsContainer.appendChild(descriptionContainer);

        /**quantity container*/

        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity-container", "d-flex", "gap");

        const quantityContainerTitle = document.createElement("p");
        quantityContainerTitle.classList.add("q-title");
        quantityContainerTitle.innerText = "Quantity";

        /**we will append child as we go through the code*/
        quantityContainer.appendChild(quantityContainerTitle);

        const quantity = document.createElement("div");
        quantity.classList.add("count-container", "d-flex", "gap", "align-center");

        const incButton = document.createElement("button");
        incButton.classList.add("count");
        incButton.innerText = "+";
        

        const value = document.createElement("span");
        value.classList.add("count-value");
        value.innerText = "1";
        

        const decButton = document.createElement("button");
        decButton.classList.add("count");
        decButton.innerText = "-";
        quantity.appendChild(decButton)
        quantity.appendChild(value);
        quantity.appendChild(incButton)

        incButton.addEventListener("click", () => {
            const currentValue = parseInt(value.innerText);
            value.innerText = (currentValue + 1).toString();
          });
          
          // Add event listener for the "-" button
          decButton.addEventListener("click", () => {
            const currentValue = parseInt(value.innerText);
            if (currentValue > 1) {
              value.innerText = (currentValue - 1).toString();
            }
        })

        quantityContainer.appendChild(quantity);
        detailsContainer.appendChild(quantityContainer);

        /**CTA Button*/
        /**Remember that appendchild should always be in order*/
    
        let ctaButton = document.createElement("div");
        ctaButton.classList.add("cta-btn", "d-flex", "gap");
    
        let removeButton = document.createElement("button");
        removeButton.classList.add("button","hori-btn" ,"btn-primary", "btn-icon", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
        removeButton.setAttribute("data-id", product._id);
        removeButton.innerText = "Remove";
        ctaButton.appendChild(removeButton);

        let saveButton = document.createElement("button");
        saveButton.classList.add("button","hori-btn" ,"btn-primary", "btn-icon", "d-flex", "align-center", "justify-content", "gap", "cursor", "btn-margin");
        saveButton.setAttribute("data-id", product._id); /**we are commenting this to make it work a different way*/
        saveButton.innerText = "Save to Wishlist";
        ctaButton.appendChild(saveButton);

        detailsContainer.appendChild(ctaButton);
        cardContainer.appendChild(detailsContainer);
        parentElement.appendChild(cardContainer);

    

   }
}