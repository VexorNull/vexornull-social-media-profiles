// Copy profile link handler with clean feedback
function copyProfileLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toast Notification Controller
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
