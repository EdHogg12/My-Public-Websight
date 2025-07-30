
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
function Gotokofi() {
    window.location.href = "https://ko-fi.com/machinehum";
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



document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio-file');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const progressBar = document.getElementById('progress-bar');
  const progressBarContainer = document.getElementById('progress-bar-container');

// This replaces your previous play/pause button logic
playPauseBtn.addEventListener('click', function() {
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');

  if (audio.paused) {
    audio.play();
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
  } else {
    audio.pause();
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
  }
});

  // Update progress bar as audio plays (remains the same)
  audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
  });

  // New logic for dragging the progress bar
  let isDragging = false;

  progressBarContainer.addEventListener('mousedown', function(e) {
    isDragging = true;
    updateProgress(e);
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      updateProgress(e);
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  function updateProgress(e) {
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    let newTime = (clickX / width) * audio.duration;
    
    // Clamp the value to ensure it's within the valid range
    if (newTime < 0) newTime = 0;
    if (newTime > audio.duration) newTime = audio.duration;

    audio.currentTime = newTime;
  }
});


