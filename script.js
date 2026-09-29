// Copy Profile Link Script
function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href);
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => { 
        toast.classList.remove("show"); 
    }, 3000);
}

// Live Search / Filter Script
function filterLinks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let links = document.getElementById('linksList').getElementsByClassName('social-link');

    for (let i = 0; i < links.length; i++) {
        let name = links[i].getAttribute('data-name');
        if (name.includes(input)) {
            links[i].style.display = "flex";
        } else {
            links[i].style.display = "none";
        }
    }
}

// Chrome-Safe Background Transition Engine
const themePalettes = [
    { c1: '#6366f1', c2: '#ec4899' }, 
    { c1: '#3b82f6', c2: '#10b981' }, 
    { c1: '#8b5cf6', c2: '#f43f5e' }, 
    { c1: '#06b6d4', c2: '#6366f1' }, 
    { c1: '#f59e0b', c2: '#ef4444' }  
];
let colorIndex = 0;

function autoChangeBackground() {
    colorIndex = (colorIndex + 1) % themePalettes.length;
    let current = themePalettes[colorIndex];
    document.documentElement.style.setProperty('--accent-1', current.c1);
    document.documentElement.style.setProperty('--accent-2', current.c2);
}

setInterval(autoChangeBackground, 5000);