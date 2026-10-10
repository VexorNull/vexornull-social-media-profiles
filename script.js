window.addEventListener('DOMContentLoaded', () => {
    // Interactive Mouse Spotlight Tracker
    document.addEventListener('mousemove', (e) => {
        const spotlight = document.getElementById('mouseSpotlight');
        if (spotlight) {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        }
    });

    // Codex Credential Animation Engine (Pure Binary Code Rain)
    const canvas = document.getElementById('codexCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let width, height;
        function resizeCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Binary stream character set
        const chars = '01';
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }

        // Curl-Noise Embers (Sparks / Floating Particles)
        let embers = [];
        const emberCount = 40;
        for (let i = 0; i < emberCount; i++) {
            embers.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.6,
                speedY: (Math.random() - 0.8) * 1.2,
                opacity: Math.random() * 0.6 + 0.2
            });
        }

        function drawCodexBackground() {
            ctx.fillStyle = 'rgba(3, 7, 18, 0.18)';
            ctx.fillRect(0, 0, width, height);

            // Draw Luminous Binary Rain (0 & 1)
            ctx.font = `600 ${fontSize}px 'JetBrains Mono', monospace`;
            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillStyle = Math.random() > 0.85 ? '#ffffff' : '#818cf8';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            // Draw Curl-Noise Embers (Sparks)
            embers.forEach(ember => {
                ember.x += ember.speedX + Math.sin(ember.y * 0.01) * 0.4;
                ember.y += ember.speedY;

                if (ember.y < 0) {
                    ember.y = height;
                    ember.x = Math.random() * width;
                }
                if (ember.x < 0) ember.x = width;
                if (ember.x > width) ember.x = 0;

                ctx.beginPath();
                ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99, 102, 241, ${ember.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(drawCodexBackground);
        }
        requestAnimationFrame(drawCodexBackground);
    }

    // Telemetry & Dynamic Clock
    function updateTelemetry() {
        const now = new Date();
        const timeString = now.toTimeString().split(' ')[0];
        const clockEl = document.getElementById('liveClock');
        if (clockEl) {
            clockEl.textContent = timeString;
        }

        const hours = now.getHours();
        let greeting = "Developer";
        if (hours >= 5 && hours < 12) greeting = "Good Morning";
        else if (hours >= 12 && hours < 18) greeting = "Good Afternoon";
        else greeting = "Good Evening";

        const greetingEl = document.getElementById('localGreeting');
        if (greetingEl) {
            greetingEl.textContent = greeting;
        }

        const pingEl = document.getElementById('pingRate');
        if (pingEl && Math.random() > 0.7) {
            const randomPing = Math.floor(Math.random() * 8) + 10;
            pingEl.textContent = `${randomPing}ms`;
        }
    }
    setInterval(updateTelemetry, 1000);
    updateTelemetry();
});

// Global Event Handlers for UI Buttons
function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("✨ Hub profile link copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function copyHandle() {
    navigator.clipboard.writeText('@vexornull').then(() => {
        showToast("✨ Handle @vexornull copied!");
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    if (message) toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

function filterLinks() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const filter = input.value.toLowerCase();
    const linksList = document.getElementById('linksList');
    if (!linksList) return;
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

    if (noResults) {
        noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
});

let fxActive = true;
function toggleEffects() {
    fxActive = !fxActive;
    const canvasEl = document.getElementById('codexCanvas');
    const grid = document.querySelector('.cyber-grid');
    const icon = document.getElementById('fxIcon');
    
    if (canvasEl) canvasEl.style.opacity = fxActive ? "1" : "0.15";
    if (grid) {
        grid.style.animationPlayState = fxActive ? "running" : "paused";
        grid.style.opacity = fxActive ? "1" : "0.2";
    }
    if (icon) {
        icon.className = fxActive ? "fa-solid fa-cube" : "fa-solid fa-cube fa-fade";
    }
}

function triggerAvatarEasterEgg() {
    const statuses = [
        "Bro, chill! You're gonna break the screen.",
        "Easy there, man. I'm not an ATM.",
        "Relax, bro. Admiring the profile is enough!",
        "Bro really thinks clicking faster unlocks a cheat code.",
        "Take it easy, man. Let the server breathe."
    ];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const statusTextEl = document.getElementById('statusText');
    if (statusTextEl) statusTextEl.textContent = randomStatus;
}

function openQrModal() {
    const modal = document.getElementById('qrModal');
    const qrImg = document.getElementById('qrImage');
    if (!modal || !qrImg) return;
    const currentUrl = encodeURIComponent(window.location.href);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${currentUrl}`;
    modal.classList.add('active');
}

function closeQrModal(event) {
    if (event.target.classList.contains('modal-overlay') || event.target.closest('.modal-close')) {
        const modal = document.getElementById('qrModal');
        if (modal) modal.classList.remove('active');
    }
}
