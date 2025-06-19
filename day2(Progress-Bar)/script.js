const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update();
});

function update() {
    //1. Highlight active steps
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active'); //light up step
        } else {
            circle.classList.remove('active'); // turn off step
        }
    });

    //2. Calculate progress bar width
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // 3. Enable/Disable buttons
    if (currentActive === 1) {
        prev.disabled = true;
        next.disabled = false;
    } else if (currentActive === circles.length) {
        next.disabled = true
        prev.disabled = false;
    } else {
        prev.disabled = false;
        prev.disabled = false;
    }
}