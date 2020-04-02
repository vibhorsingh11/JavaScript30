document.addEventListener('DOMContentLoaded', GetElements);

// Getting all elements of the video
function GetElements() {
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');

    // Toggling play & pause on button and on click inside the video
    function Toggle() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }
    
    // Upating the play/pause icon
    function updateButton() {
        const icon = this.paused ? '►' : '❚ ❚';
        toggle.textContent = icon;
    }

    // Handling progress bar on the video play
    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }

    // Skipping the video forward/backward
    function skip() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

    // Controlling volume and speed of playback
    function handleRangeUpdate() {
        video[this.name] = this.value;
    }

    // Dragging the progress bar for update
    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    // Event handling 
    video.addEventListener('click', Toggle);
    toggle.addEventListener('click', Toggle);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    skipButtons.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
}

