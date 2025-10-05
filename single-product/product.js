const urlData = new URLSearchParams(window.location.search)


let name = urlData.get("name")
var id = urlData.get("id")



function getProduct() {
    fetch(`https://dummyjson.com/products/${id}`).then((response) => response.json()).then((result) => showProduct(result))
}

getProduct()

function showProduct(result) {
    const {title,description,price,thumbnail} = result
    let container = document.getElementById("container")
    container.innerHTML = `<div class="product">
    <div class="image">
      <img src="${thumbnail}" alt="Product">
    </div>
    <div class="details">
      <h1>${title}</h1>
      <p>${description}</p>
      <div class="rating">⭐⭐⭐⭐☆ (20 reviews)</div>
      <div class="price">${price}$<span class="old-price">$100.00</span></div>
      <div class="options">
        <select>
          <option>Select Color</option>
          <option>Black</option>
          <option>White</option>
        </select>
        <select>
          <option>Select Size</option>
          <option>Small</option>
          <option>Medium</option>
        </select>
      </div>
      <div class="buttons">
        <button class="add">Add to Cart</button>
        <button class="buy">Buy Now</button>
      </div>
      <div class="stock">In Stock</div>
    </div>
  </div>

  <div class="tabs">
    <button class="active">Description</button>
    <button>Specifications</button>
    <button>Reviews</button>
  </div>
  <div class="tab-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
  </div>

  <div class="reviews">
    <h2>Reviews</h2>
    <div class="review">
      <img src="https://via.placeholder.com/50" alt="user">
      <div class="review-content">
        <h4>Jane Doe</h4>
        <small>⭐️⭐️⭐️⭐️⭐️ • Mar 10, 2024</small>
        <p>Excellent product! Really happy with the quality.</p>
      </div>
    </div>
    <div class="review">
      <img src="https://via.placeholder.com/50" alt="user">
      <div class="review-content">
        <h4>John Smith</h4>
        <small>⭐️⭐️⭐️⭐️ • Feb 15, 2024</small>
        <p>Good product but delivery was a little slow.</p>
      </div>
    </div>
  </div>`


}