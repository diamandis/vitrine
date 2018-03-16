const X = (callback) => {
    let referenceContainer = document.querySelector("#reference");
    let productDetails = createItem(callback.data.reference);
    productDetails.forEach(elem => referenceContainer.appendChild(elem));

    console.log(callback.data.widget.size);
};

const createItem = (data) => {
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let price = document.createElement("p");
    let oldPrice = document.createElement("p");
    let paymentConditions = document.createElement("p");
    
    productImg.setAttribute("src",data.item.imageName);
    productName.textContent = data.item.name;
    price.textContent = `Por: R$${data.item.price}`;
    if(data.item.oldPrice!=="null") {
        oldPrice.textContent = `De: R$${data.item.oldPrice}`;
    } else {    
        oldPrice.setAttribute("disabled","");
    }
    paymentConditions.innerText = data.item.productInfo.paymentConditions;

    return [productImg,productName,oldPrice,price,paymentConditions];
}