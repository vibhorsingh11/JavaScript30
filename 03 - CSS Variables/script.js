// Using DOMContentLoaded event to 

document.addEventListener('DOMContentLoaded',Inputs);

function Inputs() {
    // Selecting all inputs and class control for triggering events
    const inputs = document.querySelectorAll('.controls input'); 

    // Triggering events on mousemove and change
    inputs.forEach(input => input.addEventListener('change', handleUpdates));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));
}

function handleUpdates() {
    // Fetching suffix from the data property... later using it for the property value
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
