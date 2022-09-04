const hamburger_button = document.querySelector(".hamburger-icon");
const hamburger_overlay = document.querySelector(".hamburger-overlay");
const hamburger_section = document.querySelector(".hamburger-section");
const background_image = document.querySelector(".background-image");
const services_image = document.querySelector(".services-image");
const services_intro_container = document.querySelector(".services-intro-container");
const left_pricing_container = document.querySelector(".left-pricing-container");
const contact_image = document.querySelector(".contact-image");
const contact_intro_container = document.querySelector(".contact-intro-container");

hamburger_button.addEventListener("click", function () {
	hamburger_button.classList.toggle("is-active");
	hamburger_overlay.classList.toggle("is-open");
	hamburger_section.classList.toggle("is-active");
	background_image.classList.toggle("is-open");
});

hamburger_button.addEventListener("click", function () {
	services_image.classList.toggle("is-open");
	services_intro_container.classList.toggle("is-open");
	left_pricing_container.classList.toggle("is-open");
});

hamburger_button.addEventListener("click", function () {
	contact_image.classList.toggle("is-open");
	contact_intro_container.classList.toggle("is-open");
});