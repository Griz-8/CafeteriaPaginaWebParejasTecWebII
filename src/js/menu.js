export function initMenuFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  if (!filterButtons.length) return;

  const normalize = (text) => text.toLowerCase().trim();

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Activar botón
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = normalize(button.textContent);

      products.forEach(product => {
        const tag = product.querySelector(".category-tag");
        if (!tag) return;

        const productCategory = normalize(tag.textContent);

        if (category === "todos" || category === productCategory) {
          product.style.display = "";
        } else {
          product.style.display = "none";
        }
      });

    });
  });
}