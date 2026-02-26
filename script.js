// =====================
// Utility JavaScript
// - Set dynamic year in the footer
// - Provide a simple demo message for the contact form
// =====================

document.addEventListener("DOMContentLoaded", function () {
  // Update the footer year automatically
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Handle the demo contact form submit without sending data
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      status.textContent = "Thanks for your message! This is a demo form and does not send data.";
      status.classList.remove("text-danger");
      status.classList.add("text-secondary");

      // Optionally clear inputs to simulate a clean submission state
      form.reset();
    });
  }
});

