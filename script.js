// Real-time Clock on Telemetry Bar
function updateLiveClock() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    const clockEl = document.getElementById('liveClock');
    if (clockEl) {
        clockEl.textContent = timeString;
    }

    // Dynamic Greeting based on Local Time
    const hours = now.getHours();
    let greeting = "Developer";
    if (hours >= 5 && hours < 12) greeting = "Good Morning";
    else if (hours >= 12 && hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    const greetingEl = document.getElementById('localGreeting');
    if (greetingEl) {
        greetingEl.textContent = greeting;
    }
}
setInterval(updateLiveClock, 1000);
updateLiveClock();

// Copy Profile Link Handler
function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toast Controller
function showToast() {
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Live Filter for Social Platforms & Developer Links
function filterLinks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const linksList = document.getElementById('linksList');
    const links = linksList.getElementsByClassName('social-link');

    for (let i = 0; i < links.length; i++) {
        const title = links[i].getAttribute('data-name');
        if (title.indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

// Keyboard shortcut: Press '/' anywhere to focus search
document.addEventListener('keydown', function(event) {
    if (event.key === '/' && document.activeElement.tagName !== 'INPUT') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput.focus();
    }
});

// Toggle Ambient Animation Effects
let fxActive = true;
function toggleEffects() {
    fxActive = !fxActive;
    const grid = document.querySelector('.cyber-grid');
    const icon = document.getElementById('fxIcon');
    
    if (fxActive) {
        grid.style.opacity = "1";
        icon.className = "fa-solid fa-wand-magic-sparkles";
    } else {
        grid.style.opacity = "0.2";
        icon.className = "fa-solid fa-wand-magic";
    }
}

// Avatar Easter Egg Click
function triggerAvatarEasterEgg() {
    const statuses = [
        "System Online • Verified Hub",
        "Executing Clean Code...",
        "Deploying to Vercel...",
        "Always Building & Learning 🚀"
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    document.getElementById('statusText').textContent = randomStatus;
}
