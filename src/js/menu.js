export function initMenuFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

  if (!filterButtons.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.textContent.trim();

      products.forEach(product => {
        const productCategory = product.querySelector(".category-tag").textContent.trim();

        if (category === "Todos" || category === productCategory) {
          product.style.display = "flex";
        } else {
          product.style.display = "none";
        }
      });

    });
  });
}