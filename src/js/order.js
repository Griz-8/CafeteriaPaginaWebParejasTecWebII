export function initOrderButtons() {
  const orderButtons = document.querySelectorAll(".btn-order");

  if (!orderButtons.length) return;

  orderButtons.forEach(button => {
    button.addEventListener("click", (e) => {

      const card = e.target.closest(".product-card");
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector(".price").textContent;

      console.log(`Ordenaste: ${name} - ${price}`);
      alert(`Agregaste: ${name} (${price})`);

    });
  });
}