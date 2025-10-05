function getProduct() {
    fetch('https://dummyjson.com/products').then((response) => response.json()).then((result) => showProduct(result))
}

function showProduct(result) {

    const { products } = result
    let cardElement = document.getElementById("container")
    products.map((element) => {
        cardElement.innerHTML += `<a href="./single-product/product.html?id=${element.id}&name=Khalid">
        <div class="card">
            <img src="${element.thumbnail}" alt="Product Image">
            <div class="product-info">
                <div class="product-title" >${element.title}</div>
                <div class="price">Rs ${element.price}$</div>
                <div class="discription">
                    ${element.description}
                </div>
                <div id="ownerName">
                    Khalid
                </div>
            </div>
        </div>
        </a>
`
    })
}
getProduct()