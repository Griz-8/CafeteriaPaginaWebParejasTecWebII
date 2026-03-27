const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
      alert("⚠️ Por favor completa todos los campos");
      return;
    }

    if (!email.value.includes("@")) {
      alert("⚠️ Email inválido");
      return;
    }

    alert("✅ Mensaje enviado correctamente");
    form.reset();
  });
}