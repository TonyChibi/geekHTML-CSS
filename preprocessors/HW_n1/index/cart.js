let products = [];
let storage = window.sessionStorage;
storage.setItem("cartProducts", JSON.stringify(products))
let icon = document.querySelector("button.header_button.cart_logo");


function CircleSvg() {
    this.svg = document.createElement("svg");
    this.svg.viewport = "0 0 100 100";
    this.svg.style.position = "absolute";
    this.svg.top = "0";
    this.svg.right = "10%";

    this.circle = document.createElement("circle");
    this.circle.cx = "50";
    this.circle.cy = "50";
    this.circle.r = "50";
    this.circle.fill = "red";
    this.circle.style.position = "relative";
    this.svg.appendChild(this.circle);

    this.p = document.createElement("p");
    this.p.style.position = "absolute";
    this.p.style.top = "0";
    this.p.style.left = "10%";
    this.svg.appendChild("this.p");

}

function addToCart(product) {

    products.push(product);
    console.log(products.length);
    storage.setItem("cartProducts", JSON.stringify(products));
    console.log(JSON.parse(storage.cartProducts));

    icon.style.position = "relative";
    icon.style.top = "0";
    icon.style.left = "0";






}
function deleteFromCart(product) {
    products.pop(product);
    console.log(products);

    console.log(storage.products);
}