const X = (callback) => {
    let referenceContainer = document.querySelector("#reference");
    let referenceDiv = document.createElement("div");    
    referenceContainer.appendChild(referenceDiv);

    let recommendationsContainer = document.querySelector("#recommendations");
    
    let productDetails = createItem(callback.data.reference.item);
    productDetails.forEach(elem => referenceDiv.appendChild(elem));

    let recommendations = callback.data.recommendation;
    recommendations.forEach(item => { 
        let recommendationDiv = document.createElement("div");    
        recommendationsContainer.appendChild(recommendationDiv);
        let product = createItem(item);
        product.forEach(elem => recommendationDiv.appendChild(elem));
    });
    
};

const createItem = (data) => {
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let price = document.createElement("p");
    let oldPrice = document.createElement("p");
    let paymentConditions = document.createElement("p");
    
    productImg.setAttribute("src",data.imageName);
    productName.textContent = data.name;
    productName.setAttribute("class","name");
    price.textContent = `Por: ${data.price}`;
    if(data.oldPrice!==null) {
        oldPrice.textContent = `De: ${data.oldPrice}`;
    } else {    
        oldPrice.setAttribute("hidden","");
    }
    paymentConditions.innerText = data.productInfo.paymentConditions;
    price.setAttribute("class","price");
    oldPrice.setAttribute("class","price");
    paymentConditions.setAttribute("class","price");
        
    return [productImg,productName,oldPrice,price,paymentConditions];
}