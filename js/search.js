const products = [
    { id: 1, name: "Royal Kaju Katli", category: "Mithai", description: "Premium cashew mithai, handcrafted fresh.", price: 499, oldPrice: 550, image: "https://images.unsplash.com/photo-1605197584541-2f0568f70950?auto=format&fit=crop&w=600&q=85", keywords: "kaju katli cashew sweet mithai" },
    { id: 2, name: "Bhavnagari Gathiya", category: "Farsan", description: "Traditional Gujarati savoury favourite.", price: 170, oldPrice: 190, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=85", keywords: "gathiya farsan gujarati snack" },
    { id: 3, name: "Ratlami Sev", category: "Namkeen", description: "A spicy, crunchy tea-time snack.", price: 140, oldPrice: 160, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=85", keywords: "ratlami sev namkeen farsan spicy" },
    { id: 4, name: "Motichoor Laddu", category: "Mithai", description: "Soft traditional laddus made for celebrations.", price: 320, oldPrice: 350, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85", keywords: "motichoor laddu ladoo mithai sweet" },
    { id: 5, name: "Mohanthal", category: "Mithai", description: "Classic Gujarati gram flour sweet.", price: 360, oldPrice: 390, image: "https://images.unsplash.com/photo-1605197584541-2f0568f70950?auto=format&fit=crop&w=600&q=85", keywords: "mohanthal gujarati mithai sweet" },
    { id: 6, name: "Fafda", category: "Farsan", description: "Crispy Gujarati gram flour snack.", price: 180, oldPrice: 200, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=85", keywords: "fafda farsan gujarati snack" },
    { id: 7, name: "Khandvi", category: "Farsan", description: "Soft and delicate Gujarati savoury rolls.", price: 160, oldPrice: 180, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=85", keywords: "khandvi farsan gujarati snack" },
    { id: 8, name: "Gulab Jamun", category: "Mithai", description: "Soft syrup-soaked traditional dessert.", price: 240, oldPrice: 270, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85", keywords: "gulab jamun syrup sweet mithai" }
];

const searchForm = document.getElementById("productSearchForm");
const searchInput = document.getElementById("productSearchInput");
const clearButton = document.getElementById("clearSearch");
const discovery = document.getElementById("searchDiscovery");
const resultsSection = document.getElementById("searchResults");
const resultsGrid = document.getElementById("resultsGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultsDescription = document.getElementById("resultsDescription");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const recentContainer = document.getElementById("recentSearches");
const RECENT_KEY = "akshar_recent_searches";
const CART_KEY = "akshar_cart";

function getRecentSearches() {
    try {
        return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    } catch {
        return [];
    }
}

function saveRecentSearch(query) {
    const recent = getRecentSearches().filter(item => item.toLowerCase() !== query.toLowerCase());
    recent.unshift(query);
    localStorage.setItem(RECENT_KEY, JSON.stringify(recent.slice(0, 5)));
    renderRecentSearches();
}

function renderRecentSearches() {
    const recent = getRecentSearches();
    if (!recent.length) {
        recentContainer.innerHTML = '<p class="recent-empty">Your recent searches will appear here.</p>';
        document.getElementById("clearRecent").hidden = true;
        return;
    }
    document.getElementById("clearRecent").hidden = false;
    recentContainer.innerHTML = recent.map(query => `
    <button class="recent-item" data-query="${escapeHTML(query)}"><span>↺</span>${escapeHTML(query)}<small>›</small></button>
  `).join("");
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function searchProducts(query) {
    const term = query.toLowerCase().trim();
    return products.filter(product =>
        `${product.name} ${product.category} ${product.description} ${product.keywords}`.toLowerCase().includes(term)
    );
}

function renderResults(query) {
    const matches = searchProducts(query);
    discovery.hidden = true;
    resultsSection.hidden = false;
    resultsTitle.textContent = `Results for "${query}"`;
    resultsDescription.textContent = matches.length ? "Products matching your search" : "Try another search or explore our collections.";
    resultsCount.textContent = `${matches.length} ${matches.length === 1 ? "product" : "products"}`;
    noResults.hidden = matches.length !== 0;
    resultsGrid.hidden = matches.length === 0;

    resultsGrid.innerHTML = matches.map(product => `
    <article class="search-product-card">
      <div class="search-product-image">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy">
        <span class="search-product-category">${product.category}</span>
      </div>
      <div class="search-product-info">
        <h3>${escapeHTML(product.name)}</h3>
        <p>${escapeHTML(product.description)}</p>
        <div class="search-product-bottom">
          <span class="search-product-price">₹${product.price} <del>₹${product.oldPrice}</del></span>
          <button class="search-add-button" data-add="${product.id}">ADD +</button>
        </div>
      </div>
    </article>
  `).join("");
}

function performSearch(query) {
    const cleanQuery = query.trim();
    if (!cleanQuery) {
        searchInput.focus();
        return;
    }
    searchInput.value = cleanQuery;
    clearButton.hidden = false;
    saveRecentSearch(cleanQuery);
    renderResults(cleanQuery);
}

function showDiscovery() {
    searchInput.value = "";
    clearButton.hidden = true;
    resultsSection.hidden = true;
    discovery.hidden = false;
    searchInput.focus();
}

function updateCartCount() {
    let count = 0;
    try {
        const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
        count = cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
    } catch { }
    document.getElementById("bottomCartCount").textContent = count;
    document.getElementById("sidebarCartCount").textContent = count;
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    performSearch(searchInput.value);
});

searchInput.addEventListener("input", () => {
    clearButton.hidden = !searchInput.value;
    if (!searchInput.value.trim()) {
        resultsSection.hidden = true;
        discovery.hidden = false;
    }
});

clearButton.addEventListener("click", () => {
    showDiscovery();
});

document.addEventListener("click", event => {
    const queryButton = event.target.closest("[data-query]");
    if (queryButton) performSearch(queryButton.dataset.query);
});

recentContainer.addEventListener("click", event => {
    const button = event.target.closest("[data-query]");
    if (button) performSearch(button.dataset.query);
});

document.getElementById("clearRecent").addEventListener("click", () => {
    localStorage.removeItem(RECENT_KEY);
    renderRecentSearches();
});

document.getElementById("backToDiscovery").addEventListener("click", showDiscovery);

resultsGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;
    const product = products.find(item => item.id === Number(button.dataset.add));
    if (!product) return;

    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch { }

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
    button.textContent = "ADDED ✓";
    setTimeout(() => button.textContent = "ADD +", 1200);
});

document.addEventListener("keydown", event => {
    const tag = document.activeElement.tagName;
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tag);

    if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchInput.focus();
    }

    if (event.key === "Escape") {
        if (document.activeElement === searchInput) showDiscovery();
    }
});

const initialQuery = new URLSearchParams(window.location.search).get("q");
if (initialQuery) performSearch(initialQuery);

renderRecentSearches();
updateCartCount();