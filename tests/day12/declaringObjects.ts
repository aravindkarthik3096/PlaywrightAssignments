
// Task 1 – Declare and Manipulate a Product Object

let productDetails:{
    productID:number,
    productName:string,
    isAvailable?:boolean

}
={
    productID: 4738,
    productName: "Ascis shoes",
    isAvailable: true
}

productDetails.productName="Adidas shoes";
console.log(productDetails.productName);

delete productDetails.isAvailable;
console.log(productDetails.isAvailable);
