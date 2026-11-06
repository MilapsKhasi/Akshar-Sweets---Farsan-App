const categoryCards = [...document.querySelectorAll(".category-card")];
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const categorySearch = document.getElementById("categorySearch");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");

let activeFilter = "all";
let searchQuery = "";

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function filterCategories() {
  let visibleCount = 0;
  categoryCards.forEach(card => {
    const category = card.dataset.category;
    const name = card.dataset.name;
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = name.includes(searchQuery);
    const visible = matchesFilter && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });
  emptyState.hidden = visibleCount !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    filterCategories();
  });
});

categorySearch.addEventListener("input", () => {
  searchQuery = categorySearch.value.trim().toLowerCase();
  filterCategories();
});

document.getElementById("resetFilters").addEventListener("click", () => {
  activeFilter = "all";
  searchQuery = "";
  categorySearch.value = "";
  filterButtons.forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  filterCategories();
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    categorySearch.focus();
  }
  if (event.key === "Escape" && document.activeElement === categorySearch) {
    categorySearch.value = "";
    searchQuery = "";
    filterCategories();
    categorySearch.blur();
  }
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", event => {
    if (card.getAttribute("href") === "products.html") {
      event.preventDefault();
      showToast("Products collection will be available soon");
    }
  });
});

document.querySelectorAll(".bulk-actions a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast("Store contact details will be added here");
  });
});

document.querySelectorAll(".sidebar-nav .nav-item, .bottom-nav .bottom-item").forEach(item => {
  const href = item.getAttribute("href");
  if (!href || href === "categories.html") return;
  item.addEventListener("click", event => {
    if (href === "#") {
      event.preventDefault();
      showToast("This section will be available soon");
    }
  });
});

filterCategories();