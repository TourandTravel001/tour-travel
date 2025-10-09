function scrollToPackages() {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}

// “Book Now” buttons scroll to booking section
const buttons = document.querySelectorAll('.book');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const packageName = btn.dataset.package;
    document.getElementById('packageName').value = packageName;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you! We’ll contact you soon to confirm your booking.");
  document.getElementById('bookingForm').reset();
});
