/* 
    Parses server callback and generates widget
*/    
const X = (callback) => {
    createItem("#reference",callback.data.reference.item);
    
    let recommendedProducts = callback.data.recommendation;
    recommendedProducts.forEach((item)=>createItem("#recommendations",item));
    
};

/* 
   Append <div> with product details to matched element
   @param selector: CSS selector string matching parent element
   @param data: data to populate new <div>
*/
const createItem = (selector,data) => {
    let container = document.querySelector(selector);
    let newItem = document.createElement("div"); 
    newItem.innerHTML = setProductDetails(data);   
    container.appendChild(newItem);

};

const setProductDetails = (data) => 
                `<img src="${data.imageName}">
                <p>${data.name}</p>
                <p ${isOldPriceAvailable(data.oldPrice)}>De: ${data.oldPrice}</p>
                <p class="price">Por: <span>${data.price}</span></p>
                <p class="price">${data.productInfo.paymentConditions}</p>`;


const isOldPriceAvailable = (price) => {
    if(price === null) {
        return "hidden";
    }
}