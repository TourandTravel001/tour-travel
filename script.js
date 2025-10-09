function scrollToPackages() {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

const buttons = document.querySelectorAll('.book');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Thanks for choosing Tour & Travel! We’ll contact you soon 😊");
  });
});
