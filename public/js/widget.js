/* 
    Parses server callback and generates widget
*/    
const X = (callback) => {
    createItem("#reference",callback.data.reference.item);
    
    let recommendedProducts = callback.data.recommendation;
    recommendedProducts.forEach((item)=> createItem("#recommendations",item));

    let btnRight = document.getElementById("btn-right").addEventListener("click",next);
    let btnLeft = document.getElementById("btn-left").addEventListener("click",prev);
};

const next = () => {
    let products = document.getElementById("recommendations").childNodes;
    products[0].parentNode.appendChild(products[0]);        
};

const prev = () => {
    let products = document.getElementById("recommendations").childNodes;
    products[9].parentNode.insertBefore(products[9],products[0]);        
};

/* 
   Append <div> with product details to matched element
   @param selector: CSS selector string matching parent element
   @param data: data to populate new <div>
*/
const createItem = (selector,data) => {
    let container = document.querySelector(selector);
    let newItem = document.createElement("div"); 
    newItem.setAttribute("class","product");
    newItem.innerHTML = setProductDetails(data);   
    container.appendChild(newItem);
};

const setProductDetails = (data) => 
                `<img src="${data.imageName}">
                <p class="name">${data.name}</p>
                <p ${isOldPriceAvailable(data.oldPrice)}>De: ${data.oldPrice}</p>
                <p class="price">Por: <span>${data.price}</span></p>
                <p class="price">${data.productInfo.paymentConditions}</p>`;


const isOldPriceAvailable = (price) => {
    if(price === null) {
        return "hidden";
    } else {
        return "";
    }
}