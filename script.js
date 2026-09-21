const equipment = [
  {
    name: "CAT 320",
    category: "Crawler Excavator",
    detail: "2021 · 4,820 hours",
    location: "UK",
    price: "Price on Request",
    image: "assets/images/excavator.jpeg",
    url: "equipment-cat-320.html",
  },
  {
    name: "JCB 535-95",
    category: "Telehandler",
    detail: "2020 · 2,760 hours",
    location: "UK",
    price: "Price on Request",
    image: "assets/images/hero-construction.jpeg",
  },
  {
    name: "Volvo L120H",
    category: "Wheel Loader",
    detail: "2019 · 6,205 hours",
    location: "UK",
    price: "Price on Request",
    image: "assets/images/wheel-loader.jpeg",
  },
];
const categories = [
  "Excavators",
  "Cranes",
  "Loaders",
  "Dump Trucks",
  "Telehandlers",
  "Dozers",
  "Rollers",
  "Attachments",
  "Other Equipment",
];
document.querySelector("#inventory-grid").innerHTML = equipment
  .map(
    (item) => `
  <article class="equipment-card"><a href="${item.url || "contact.html"}"><div class="equipment-image"><img src="${item.image}" alt="${item.name} demo listing" loading="lazy" /><span class="availability">Available</span></div><h3>${item.name}</h3><p>${item.category}</p><div class="equipment-info"><span>${item.detail}<br>${item.location}</span><span>${item.price}<br>View equipment →</span></div></a></article>`,
  )
  .join("");
document.querySelector("#category-list").innerHTML = categories
  .map((name) => `<a href="#contact">${name}<span>→</span></a>`)
  .join("");
document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  button.setAttribute(
    "aria-expanded",
    button.getAttribute("aria-expanded") !== "true",
  );
});
document
  .querySelectorAll("nav a")
  .forEach((link) =>
    link.addEventListener("click", () =>
      document
        .querySelector(".menu-toggle")
        .setAttribute("aria-expanded", "false"),
    ),
  );
document.querySelector("#sourcing-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  if (!form.checkValidity()) {
    form.reportValidity();
    message.textContent =
      "Please complete your name, email and equipment required.";
    return;
  }
  message.textContent = "Thank you — your sourcing request is ready to send.";
  form.reset();
});
