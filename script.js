// Interactive Mouse Spotlight Tracker
document.addEventListener('mousemove', (e) => {
    const spotlight = document.getElementById('mouseSpotlight');
    if (spotlight) {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    }
});

// Telemetry & Dynamic Clock
function updateTelemetry() {
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

    // Ping Simulator
    const pingEl = document.getElementById('pingRate');
    if (pingEl && Math.random() > 0.7) {
        const randomPing = Math.floor(Math.random() * 8) + 10;
        pingEl.textContent = `${randomPing}ms`;
    }
}
setInterval(updateTelemetry, 1000);
updateTelemetry();

// Copy Profile Link
function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("✨ Hub profile link copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Copy Handle Functionality
function copyHandle() {
    navigator.clipboard.writeText('@vexornull').then(() => {
        showToast("✨ Handle @vexornull copied!");
    });
}

// Toast Controller
function showToast(message) {
    const toast = document.getElementById("toast");
    if (message) toast.textContent = message;
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
    const noResults = document.getElementById('noResults');

    let visibleCount = 0;

    for (let i = 0; i < links.length; i++) {
        const nameAttr = links[i].getAttribute('data-name') || '';
        if (nameAttr.toLowerCase().indexOf(filter) > -1) {
            links[i].style.display = "";
            visibleCount++;
        } else {
            links[i].style.display = "none";
        }
    }

    // Toggle No Results Fallback
    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

// Focus Search on '/' Keypress
document.addEventListener('keydown', function(event) {
    if (event.key === '/' && document.activeElement.tagName !== 'INPUT') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput.focus();
    }
});

// Matrix FX Toggle
let fxActive = true;
function toggleEffects() {
    fxActive = !fxActive;
    const grid = document.querySelector('.cyber-grid');
    const icon = document.getElementById('fxIcon');
    
    if (fxActive) {
        grid.style.animationPlayState = "running";
        grid.style.opacity = "1";
        icon.className = "fa-solid fa-cube";
    } else {
        grid.style.animationPlayState = "paused";
        grid.style.opacity = "0.2";
        icon.className = "fa-solid fa-cube fa-fade";
    }
}

// Interactive Avatar Easter Egg
function triggerAvatarEasterEgg() {
    const statuses = [
        "Bro, chill! You're gonna break the screen.",
        "Easy there, man. I'm not an ATM.",
        "Relax, bro. Admiring the profile is enough!",
        "Bro really thinks clicking faster unlocks a cheat code.",
        "Take it easy, man. Let the server breathe."
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    document.getElementById('statusText').textContent = randomStatus;
}

// QR Code Modal Functions
function openQrModal() {
    const modal = document.getElementById('qrModal');
    const qrImg = document.getElementById('qrImage');
    const currentUrl = encodeURIComponent(window.location.href);
    
    // Dynamic QR generation API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${currentUrl}`;
    modal.classList.add('active');
}

function closeQrModal(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.closest('.modal-close')) {
        document.getElementById('qrModal').classList.remove('active');
    }
}
