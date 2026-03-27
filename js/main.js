document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupQuickNavigation();
  setupMenuFilters();
  setupOrderAndMembershipFeedback();
  setupContactFormValidation();
  setupBackToTop();
});

function setupMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupQuickNavigation() {
  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });
}

function setupMenuFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".menu-page .product-card");

  if (!filterButtons.length || !cards.length) {
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      cards.forEach((card) => {
        const category = card.dataset.category;
        const showCard = filter === "all" || category === filter;
        card.classList.toggle("is-hidden", !showCard);
      });
    });
  });
}

function setupOrderAndMembershipFeedback() {
  const orderButtons = document.querySelectorAll(".js-order-btn");
  const joinButtons = document.querySelectorAll(".js-join-btn");

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const title = card ? card.querySelector("h3") : null;
      const itemName = title ? title.textContent.trim() : "tu producto";
      showToast(`Agregaste ${itemName} a tu pedido.`);
    });
  });

  joinButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showToast("Gracias por tu interés. Te contactaremos para activar tu membresía.");
    });
  });
}

function setupContactFormValidation() {
  const form = document.getElementById("contactForm");
  if (!form) {
    return;
  }

  const fields = {
    nombre: {
      element: form.querySelector("#nombre"),
      validator: (value) => value.trim().length >= 3,
      message: "Ingresa un nombre de al menos 3 caracteres.",
    },
    email: {
      element: form.querySelector("#email"),
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()),
      message: "Ingresa un correo válido, por ejemplo nombre@dominio.com.",
    },
    mensaje: {
      element: form.querySelector("#mensaje"),
      validator: (value) => value.trim().length >= 10,
      message: "Tu mensaje debe tener al menos 10 caracteres.",
    },
  };

  const feedback = form.querySelector(".form-feedback");

  Object.values(fields).forEach(({ element }) => {
    if (!element) {
      return;
    }

    element.addEventListener("input", () => {
      validateField(element, fields[element.id].validator, fields[element.id].message);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isFormValid = true;

    Object.values(fields).forEach(({ element, validator, message }) => {
      if (!element) {
        return;
      }

      const fieldValid = validateField(element, validator, message);
      if (!fieldValid) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      if (feedback) {
        feedback.textContent = "Revisa los campos marcados antes de enviar.";
        feedback.classList.add("is-error");
        feedback.classList.remove("is-success");
      }
      return;
    }

    if (feedback) {
      feedback.textContent = "Mensaje enviado con éxito. Gracias por contactarnos.";
      feedback.classList.add("is-success");
      feedback.classList.remove("is-error");
    }

    showToast("Formulario enviado correctamente.");
    form.reset();

    form.querySelectorAll(".is-invalid").forEach((field) => {
      field.classList.remove("is-invalid");
    });

    form.querySelectorAll(".field-error").forEach((error) => {
      error.textContent = "";
    });
  });
}

function validateField(element, validator, message) {
  const value = element.value;
  const isValid = validator(value);

  let errorEl = element.parentElement.querySelector(".field-error");
  if (!errorEl) {
    errorEl = document.createElement("small");
    errorEl.className = "field-error";
    errorEl.setAttribute("aria-live", "polite");
    element.parentElement.appendChild(errorEl);
  }

  if (!isValid) {
    element.classList.add("is-invalid");
    errorEl.textContent = message;
  } else {
    element.classList.remove("is-invalid");
    errorEl.textContent = "";
  }

  return isValid;
}

function setupBackToTop() {
  const button = document.createElement("button");
  button.className = "back-to-top";
  button.type = "button";
  button.setAttribute("aria-label", "Volver arriba");
  button.textContent = "↑";

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function showToast(message) {
  const currentToast = document.querySelector(".toast-message");
  if (currentToast) {
    currentToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}
