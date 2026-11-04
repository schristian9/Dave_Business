const equipment = [
  {
    name: "CAT 320",
    category: "Crawler Excavator",
    year: "2021",
    hours: "4,820 hrs",
    weight: "22.5 t",
    location: "United Kingdom",
    price: "Price on request",
    image: "assets/images/excavator.jpeg",
    url: "equipment-cat-320.html",
  },
  {
    name: "JCB 535-95",
    category: "Telehandler",
    year: "2020",
    hours: "2,760 hrs",
    weight: "8.2 t",
    location: "United Kingdom",
    price: "Price on request",
    image: "assets/images/hero-construction.jpeg",
    url: "contact.html?equipment=JCB+535-95",
  },
  {
    name: "Volvo L120H",
    category: "Wheel Loader",
    year: "2019",
    hours: "6,205 hrs",
    weight: "20.7 t",
    location: "United Kingdom",
    price: "Price on request",
    image: "assets/images/wheel-loader.jpeg",
    url: "contact.html?equipment=Volvo+L120H",
  },
];

const categories = [
  "Crawler Excavators",
  "Telehandlers",
  "Wheel Loaders",
  "Articulated Dump Trucks",
  "Tracked Bulldozers",
  "Compactors & Rollers",
  "Crushers & Screeners",
  "Hydraulic Attachments",
  "Specialist Plant",
];

const inventoryGrid = document.querySelector("#inventory-grid");
if (inventoryGrid) {
  inventoryGrid.innerHTML = equipment
    .map(
      (item) => `
    <article class="equipment-card">
      <a href="${item.url}">
        <div class="equipment-image">
          <img src="${item.image}" alt="${item.name} ${item.category}" loading="lazy" />
          <span class="equipment-badge">Available</span>
        </div>
        <div class="equipment-body">
          <span class="equipment-meta">${item.category}</span>
          <h3 class="equipment-title">${item.name}</h3>
          <dl class="equipment-specs-grid">
            <div>
              <dt>Year</dt>
              <dd class="tabular">${item.year}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd class="tabular">${item.hours}</dd>
            </div>
            <div>
              <dt>Weight</dt>
              <dd class="tabular">${item.weight}</dd>
            </div>
          </dl>
          <div class="equipment-foot">
            <span class="equipment-price">${item.price}</span>
            <span class="equipment-cta">
              View Specification
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </a>
    </article>`,
    )
    .join("");
}

const categoryList = document.querySelector("#category-list");
if (categoryList) {
  categoryList.innerHTML = categories
    .map(
      (name) => `
    <a class="category-item" href="contact.html?category=${encodeURIComponent(name)}">
      <span>${name}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>`,
    )
    .join("");
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.style.display = isExpanded ? "none" : "flex";
  });
}

const sourcingForm = document.querySelector("#sourcing-form");
if (sourcingForm) {
  sourcingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.querySelector(".form-message");
    if (!form.checkValidity()) {
      form.reportValidity();
      if (message) {
        message.style.color = "#dc2626";
        message.textContent = "Please complete all required fields.";
      }
      return;
    }
    if (message) {
      message.style.color = "#15803d";
      message.textContent = "Thank you. Your equipment sourcing request has been received.";
    }
    form.reset();
  });
}
