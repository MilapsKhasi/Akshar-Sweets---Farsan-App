const products = [
  { id: 1, name: "Nylon Khaman", category: "farsan", label: "POPULAR", weight: "250 g", price: 70, image: "/src/images/naylon-khaman.jpg" },
  { id: 2, name: "Ratlami Sev", category: "snacks", label: "SPICY", weight: "250 g", price: 85, image: "/src/images/ratlami-sev.jpg" },
  { id: 3, name: "Fafda", category: "farsan", label: "GUJARATI FAVOURITE", weight: "250 g", price: 90, image: "/src/images/fafda.jpeg" },
  { id: 4, name: "Khandvi", category: "farsan", label: "FRESH", weight: "200 g", price: 80, image: "/src/images/khandvi.webp" },
  { id: 9, name: "Nylon Chivda", category: "snacks", label: "LIGHT & CRUNCHY", weight: "250 g", price: 75, image: "/src/images/naylon-chivda.jpg" },
  { id: 10, name: "Kachori", category: "farsan", label: "SEASONAL", weight: "4 pieces", price: 100, image: "/src/images/kachori.jpg" },
  { id: 11, name: "Kaju Katli", category: "mithai", label: "BESTSELLER", weight: "250 g", price: 220, image: "/src/images/kaju-katli.jpg" },
  { id: 12, name: "Mohanthal", category: "mithai", label: "TRADITIONAL", weight: "250 g", price: 160, image: "/src/images/mohanthal.jpg" },
  { id: 13, name: "Kesar Peda", category: "mithai", label: "RICH & CREAMY", weight: "250 g", price: 180, image: "/src/images/kesar-peda.jpg" },
  { id: 14, name: "Motichoor Laddu", category: "mithai", label: "CELEBRATION", weight: "250 g", price: 150, image: "/src/images/motichur-laddu.jpg" },
  { id: 15, name: "Gulab Jamun", category: "mithai", label: "ALL-TIME FAVOURITE", weight: "500 g", price: 190, image: "/src/images/gulab-jamun.jpg" },
  { id: 16, name: "Rasmalai", category: "mithai", label: "SPECIAL", weight: "4 pieces", price: 200, image: "/src/images/rasmalai.jpg" }
]


const grid = document.getElementById("productsGrid");
const searchInput = document.getElementById("productSearch");
const sortSelect = document.getElementById("productSort");
const filterButtons = [...document.querySelectorAll(".product-filter")];
const emptyState = document.getElementById("productsEmpty");
const resultCount = document.getElementById("resultCount");
const productTotal = document.getElementById("productTotal");
const toast = document.getElementById("toast");

let activeFilter = new URLSearchParams(location.search).get("category") || "all";
let searchQuery = "";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("aksharCart")) || [];
  } catch {
    return [];
  }
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + (Number(item.quantity) || 1), 0);
  document.getElementById("sidebarCartCount")?.replaceChildren(document.createTextNode(count));
  document.getElementById("bottomCartCount")?.replaceChildren(document.createTextNode(count));
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity = (Number(existing.quantity) || 1) + 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, weight: product.weight, image: product.image, quantity: 1 });
  localStorage.setItem("aksharCart", JSON.stringify(cart));
  updateCartCount();
  showToast(`${product.name} added to cart`);
}

function renderProducts() {
  let filtered = products.filter(product => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = `${product.name} ${product.category} ${product.label}`.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const sort = sortSelect.value;
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "az") filtered.sort((a, b) => a.name.localeCompare(b.name));

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.label}</span>
      </div>
      <div class="product-details">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <span class="product-weight">${product.weight}</span>
        <div class="product-bottom">
          <strong class="product-price">₹${product.price}<small>Inclusive of taxes</small></strong>
          <button class="add-product" data-add="${product.id}">ADD +</button>
        </div>
      </div>
    </article>
  `).join("");

  resultCount.textContent = `(${filtered.length})`;
  productTotal.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderProducts();
  });
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  renderProducts();
});

sortSelect.addEventListener("change", renderProducts);

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

document.getElementById("clearProducts").addEventListener("click", () => {
  activeFilter = "all";
  searchQuery = "";
  searchInput.value = "";
  sortSelect.value = "featured";
  filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  renderProducts();
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchQuery = "";
    renderProducts();
    searchInput.blur();
  }
});

const validFilters = ["all", "farsan", "mithai", "snacks"];
if (!validFilters.includes(activeFilter)) activeFilter = "all";
filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === activeFilter));

renderProducts();
updateCartCount();