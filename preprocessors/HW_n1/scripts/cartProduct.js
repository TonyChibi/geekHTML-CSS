function CartProduct(
    src,
    price = "$300",
    name = "ELLERY X M'O CAPSUL",
    color = "Red",
    size = "XI",
    quantity = "1"
) {
    this.name = name;
    this.src = src;
    this.price = price;
    this.color = color;
    this.size = size;
    this.quantity = quantity;

}

function addCartProduct(element, product) {
    let card = document.createElement('div');
    card.classList.add("cart-product");
    element.append(card);

    let img = document.createElement('img');
    img.src = product.src;
    img.alt = product.name;
    img.classList.add("cart-product__image");
    card.appendChild(img);

    let info = document.createElement("section");
    info.classList.add("cart-product__info");
    card.appendChild(info);

    let name = document.createElement("h2");
    name.textContent = product.name;
    name.classList.add("cart-product__name");


    let crest = document.createElement("button");
    crest.classList.add("crest-button");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("viewBox", "0 0 18 18");
    svg.setAttribute("fill", "none");
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d",
        "M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z");
    path.setAttribute("fill", "#575757")
    svg.append(path);
    crest.append(svg);

    let cartPrice = document.createElement("div");
    cartPrice.classList.add("cart-product__price");
    let priceKey = document.createElement("span");
    priceKey.classList.add("key");
    priceKey.textContent = "Price:"
    let priceValue = document.createElement("span");
    priceValue.classList.add("value");
    priceValue.textContent = product.price;
    cartPrice.append(priceKey, priceValue)


    let cartColor = document.createElement("div");
    cartColor.classList.add("cart-product__color");
    let colorKey = document.createElement("span");
    colorKey.classList.add("key");
    colorKey.textContent = "Color:"
    let colorValue = document.createElement("span");
    colorValue.classList.add("value");
    colorValue.textContent = product.color;
    cartColor.append(colorKey, colorValue);

    let cartSize = document.createElement("div");
    cartSize.classList.add("cart-product__size");
    let sizeKey = document.createElement("span");
    sizeKey.classList.add("key");
    sizeKey.textContent = "Size:"
    let sizeValue = document.createElement("span");
    sizeValue.classList.add("value");
    sizeValue.textContent = product.size;
    cartSize.append(sizeKey, sizeValue);

    let cartQuantity = document.createElement("div");
    cartQuantity.classList.add("cart-product__quantity");
    let quantityKey = document.createElement("span");
    quantityKey.classList.add("key");
    quantityKey.textContent = "Quantity:"
    let quantityValue = document.createElement("input");
    quantityValue.classList.add("value");
    quantityValue.type = "number";
    quantityValue.name = product.name;
    quantityValue.value = product.quantity;
    cartQuantity.append(quantityKey, quantityValue);

    info.append(name, crest, cartPrice, cartColor, cartSize, cartQuantity)
}