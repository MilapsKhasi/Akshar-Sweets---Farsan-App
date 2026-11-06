const freshProducts = [
  {
    id: 1,
    name: "Royal Kaju Katli",
    category: "Mithai",
    description: "Premium cashew mithai, handcrafted fresh.",
    price: 499,
    originalPrice: 550,
    rating: "4.9",
    reviews: "124",
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1605197584541-2f0568f70950?auto=format&fit=crop&w=600&q=85"
  },
  {
    id: 2,
    name: "Special Bhavnagari Gathiya",
    category: "Farsan",
    description: "Mildly spiced, freshly prepared.",
    price: 170,
    originalPrice: 190,
    rating: "4.8",
    reviews: "86",
    badge: "FRESH TODAY",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=85"
  }
];

let cartCount = 0;

const freshProductsContainer = document.getElementById("freshProducts");
const toast = document.getElementById("toast");

function renderFreshProducts() {
  freshProductsContainer.innerHTML = freshProducts.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <span class="veg-mark" aria-label="Vegetarian"></span>
      </div>
      <div class="product-details">
        <span class="product-meta">${product.category} · 250 g</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">★ ${product.rating} <span>(${product.reviews} reviews)</span></div>
        <div class="product-buy-row">
          <div class="product-price">₹${product.price} <del>₹${product.originalPrice}</del></div>
          <button class="add-button" data-add="${product.id}">ADD +</button>
        </div>
      </div>
    </article>
  `).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateCartCount() {
  document.getElementById("bottomCartCount").textContent = cartCount;
  document.getElementById("sidebarCartCount").textContent = cartCount;
}

freshProductsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  cartCount++;
  updateCartCount();
  showToast("Added to your cart");
  button.textContent = "ADDED ✓";
  setTimeout(() => button.textContent = "ADD +", 1200);
});

document.getElementById("festivalOrder").addEventListener("click", () => {
  cartCount++;
  updateCartCount();
  showToast("Festive Mithai Box added to your cart");
});

document.getElementById("homeSearch").addEventListener("submit", event => {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    document.getElementById("searchInput").focus();
    return;
  }
  showToast(`Search results for "${query}" will open here`);
});

document.querySelectorAll(".category-item").forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    showToast(`${item.querySelector(".category-title").textContent} collection selected`);
  });
});

document.querySelectorAll(".section-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast("Collection page will be added next");
  });
});

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("searchInput").focus();
  }
});

renderFreshProducts();
updateCartCount();