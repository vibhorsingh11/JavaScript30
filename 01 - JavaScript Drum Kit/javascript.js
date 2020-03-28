function PlaySound(e) {
    // To select the sound on key press
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Selecting the key to be highlighted
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`)
    // Return if audio is not present for the key pressed
    if (!audio) return;
    // Reset the audio play time
    audio.currentTime = 0;
    // Play the audio after the key is selected
    audio.play();    
    // Adding the class to div for transition
    key.classList.add('playing');

    // Remove the class after the transition is completed
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', RemoveTransition));
}

function RemoveTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Trigger the event on key press
window.addEventListener('keydown', PlaySound);