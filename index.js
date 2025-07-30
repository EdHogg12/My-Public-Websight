
function GotoTikTok() {
    window.location.href = "https://www.tiktok.com/@machinehum";
}
function GotoYoutube() {
    window.location.href = "https://www.youtube.com/@MachineHum";
}
function GotoInstagram() {
    window.location.href = "https://www.instagram.com/machinehum_";
}
function GotoSpotify() {
    window.location.href = "https://www.spotify.com/";
}
function GotoApplemusic() {
    window.location.href = "https://www.applemusic.com/";
}
function Gotosoundcloud() {
    window.location.href = "https://www.soundcloud.com/";
}
function GotoMore() {
    window.location.href = "more.html";
}
function GotoCatalogue() {
    window.location.href = "catalogue.html";
}

document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animated-text');
    if (text) {
        text.classList.add('loaded');
    }
});

function toggleDropdown() {
    document.getElementById("moreDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


/* Add this to your existing index.js file */
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'section-pop-out'
    const sections = document.querySelectorAll('.section-pop-out');

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the section is intersecting the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');
                // Stop observing the section to prevent re-animating
                observer.unobserve(entry.target);
            }
        });
    }, {
        // This is the options object. The threshold is how much of the element 
        // must be visible before the callback is executed.
        threshold: 0.1 
    });

    // Loop through each section and tell the observer to watch it
    sections.forEach(section => {
        observer.observe(section);
    });
});
