const CART_KEY = "aksharCart";

const cartItemsContainer = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const subtotalElement = document.getElementById("subtotal");
const grandTotalElement = document.getElementById("grandTotal");
const cartItemTotal = document.getElementById("cartItemTotal");
const sidebarCartCount = document.getElementById("sidebarCartCount");
const bottomCartCount = document.getElementById("bottomCartCount");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartToast = document.getElementById("cartToast");

let toastTimeout;

function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(cart) ? cart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  }).format(Number(price) || 0);
}

function showToast(message) {
  cartToast.textContent = message;
  cartToast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    cartToast.classList.remove("show");
  }, 2200);
}

function updateCartCount(cart) {
  const count = cart.reduce((total, item) => {
    return total + Math.max(0, Number(item.quantity) || 0);
  }, 0);

  sidebarCartCount.textContent = count;
  bottomCartCount.textContent = count;
  cartItemTotal.textContent = `${count} ${count === 1 ? "item" : "items"}`;
}

function createCartItem(item) {
  const quantity = Math.max(1, Number(item.quantity) || 1);
  const price = Math.max(0, Number(item.price) || 0);
  const total = price * quantity;

  const article = document.createElement("article");
  article.className = "cart-item";

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "cart-item-image";

  const image = document.createElement("img");
  image.src = item.image || "";
  image.alt = item.name || "Product";
  image.loading = "lazy";
  image.onerror = () => {
    image.style.display = "none";
    imageWrapper.textContent = "🥡";
    imageWrapper.style.display = "grid";
    imageWrapper.style.placeItems = "center";
    imageWrapper.style.fontSize = "28px";
  };
  imageWrapper.appendChild(image);

  const details = document.createElement("div");
  details.className = "cart-item-details";

  const name = document.createElement("h3");
  name.textContent = item.name || "Unnamed Product";

  const weight = document.createElement("div");
  weight.className = "cart-item-weight";
  weight.textContent = item.weight || "";

  const priceText = document.createElement("div");
  priceText.className = "cart-item-price";
  priceText.textContent = `${formatPrice(price)}${item.weight ? ` / ${item.weight}` : ""}`;

  const controls = document.createElement("div");
  controls.className = "cart-item-controls";

  const quantityControl = document.createElement("div");
  quantityControl.className = "quantity-control";

  const decreaseButton = document.createElement("button");
  decreaseButton.type = "button";
  decreaseButton.textContent = "−";
  decreaseButton.setAttribute("aria-label", `Decrease ${item.name} quantity`);
  decreaseButton.addEventListener("click", () => changeQuantity(item.id, -1));

  const quantityText = document.createElement("span");
  quantityText.textContent = quantity;

  const increaseButton = document.createElement("button");
  increaseButton.type = "button";
  increaseButton.textContent = "+";
  increaseButton.setAttribute("aria-label", `Increase ${item.name} quantity`);
  increaseButton.addEventListener("click", () => changeQuantity(item.id, 1));

  quantityControl.append(decreaseButton, quantityText, increaseButton);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-item-btn";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => removeItem(item.id));

  controls.append(quantityControl, removeButton);
  details.append(name, weight, priceText, controls);

  const totalPrice = document.createElement("div");
  totalPrice.className = "cart-item-total-price";
  totalPrice.textContent = formatPrice(total);

  article.append(imageWrapper, details, totalPrice);
  return article;
}

function renderCart() {
  const cart = getCart();
  const validCart = cart.filter(item => item && item.id !== undefined && item.id !== null);

  if (validCart.length !== cart.length) {
    saveCart(validCart);
  }

  cartItemsContainer.innerHTML = "";

  const isEmpty = validCart.length === 0;
  emptyCart.hidden = !isEmpty;
  cartItemsContainer.hidden = isEmpty;
  clearCartBtn.hidden = isEmpty;

  validCart.forEach(item => {
    cartItemsContainer.appendChild(createCartItem(item));
  });

  const subtotal = validCart.reduce((total, item) => {
    return total + (Math.max(0, Number(item.price) || 0) * Math.max(1, Number(item.quantity) || 1));
  }, 0);

  subtotalElement.textContent = formatPrice(subtotal);
  grandTotalElement.textContent = formatPrice(subtotal);
  checkoutBtn.disabled = isEmpty;

  updateCartCount(validCart);
}

function changeQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find(product => String(product.id) === String(productId));

  if (!item) return;

  item.quantity = Math.max(1, Number(item.quantity) || 1) + change;
  saveCart(cart);
  renderCart();
}

function removeItem(productId) {
  const cart = getCart();
  const updatedCart = cart.filter(item => String(item.id) !== String(productId));

  saveCart(updatedCart);
  renderCart();
  showToast("Item removed from cart");
}

function clearCart() {
  if (!getCart().length) return;

  saveCart([]);
  renderCart();
  showToast("Cart cleared");
}

clearCartBtn.addEventListener("click", clearCart);

checkoutBtn.addEventListener("click", () => {
  if (getCart().length === 0) return;
  showToast("Checkout will be available soon");
});

renderCart();

window.addEventListener("storage", event => {
  if (event.key === CART_KEY) renderCart();
});