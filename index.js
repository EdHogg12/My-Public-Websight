
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
