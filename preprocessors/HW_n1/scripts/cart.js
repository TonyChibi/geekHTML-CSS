let products = [];
let storage = window.sessionStorage;
storage.setItem("cartProducts", JSON.stringify(products))
let icon = document.querySelector("button.header_button.cart_logo");
console.log(icon.childNodes)


function CircleSvg() {

    this.box = document.createElement("div");
    this.box.style.position = "absolute";
    this.box.style.top = "0";
    this.box.style.left = "0";
    this.box.style.width = "100%";
    this.box.style.height = "100%";


    this.box.classList.add("cart-circle");


    // this.svg = document.createElement("svg");
    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    this.svg.viewport = "0 0 10 10";
    this.svg.style.position = "absolute";
    this.svg.style.top = "-36%";
    this.svg.style.left = "46%";
    this.svg.style.width = "100%";
    this.svg.style.height = "100%";

    this.box.appendChild(this.svg);

    this.circle = document.createElementNS(this.svg.namespaceURI, "circle");
    this.circle.setAttribute("cx", "50%");
    this.circle.setAttribute("cy", "50%");
    this.circle.setAttribute("r", "50%");
    this.circle.setAttribute("fill", "red");
    // this.circle.style.position = "relative";
    this.svg.appendChild(this.circle);

    this.p = document.createElement("p");
    this.p.style.color = "white";
    this.p.style.position = "absolute";
    this.p.style.top = "-27%";
    this.p.style.left = "46%";
    this.p.style.fontSize = "1.5em";
    this.p.style.width = "100%";
    this.p.style.textAlign = "center";
    this.p.textContent = "0";
    this.box.appendChild(this.p);

}

function addToCart(product) {

    products.push(product);
    console.log(products.length);
    storage.setItem("cartProducts", JSON.stringify(products));
    console.log(JSON.parse(storage.cartProducts));

    icon.style.position = "relative";
    icon.style.top = "0";
    icon.style.left = "0";

    let circle = document.querySelector(".cart-circle");
    if (!circle) {
        circle = new CircleSvg();
        circle.p.textContent = products.length;
        icon.appendChild(circle.box);
        console.log(circle.svg)
    } else {
        // circle.p.textContent = products.length;
    }





}
function deleteFromCart(product) {
    products.splice(products.indexOf(product), 1);
    console.log(products);
    storage.setItem("cartProducts", JSON.stringify(products));
    console.log(JSON.parse(storage.cartProducts));
    console.log(JSON.parse(window.sessionStorage.getItem("cartProducts")))
}