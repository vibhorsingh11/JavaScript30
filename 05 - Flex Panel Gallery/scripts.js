// Getting all panels after DOM is loaded
document.addEventListener('DOMContentLoaded',Panels);

// Toggling class on click and transition end
function Panels() {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}

// Toggling class to open the section
function toggleOpen() {
  this.classList.toggle('open');
}

// Checking flex and toggling class
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}