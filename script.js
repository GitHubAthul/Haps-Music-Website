
document.getElementById('upcoming-image').addEventListener('click', function() {
    var sidebar = document.getElementById('right-sidebar');
    
    // Toggle the 'active' class to show or hide the sidebar
    sidebar.classList.toggle('active');
});


// Selecting the play button and the progress slider
const playBtn = document.querySelector(".play-btn");
const progressSlider = document.querySelector(".progress-slider");

// Toggle between play and pause icons
playBtn.addEventListener("click", () => {
    const playIcon = playBtn.querySelector("i");
    playIcon.classList.toggle("fa-play");
    playIcon.classList.toggle("fa-pause");
});

// Shuffle and repeat button visual feedback
document.querySelectorAll(".shuffle-btn, .repeat-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});


// Audio player and controls
const audioPlayer = document.getElementById("audio-player");
const playbtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("previous-btn");
const progresslider = document.getElementById("progress-slider");

let songIndex = 0;
const songs = [
    { src: "Interstellar-Theme.mp3", img: "https://i.scdn.co/image/ab67616d00001e02ac29a65e7ffcfa6f9cb0d342" },
    { src: "Eyy-Banane.mp3", img: "https://i.scdn.co/image/ab67616d00001e0208ec59b2157bff530072c42c" },
    { src: "Kiliye-Malayalam.mp3", img: "https://i.scdn.co/image/ab67616d00001e0263e570d1d905346c81614546" },
    { src: "O-Maahi.mp3", img: "https://i.scdn.co/image/ab67616d00001e027506d87e6489c5a93c042523"},
    { src: "Saathiyaa.mp3", img: "https://i.scdn.co/image/ab67616d00001e02a682f3a0e5b24e8a296a6900"}
    
];


// Load a song
function loadSong(index) {
    audioPlayer.src = songs[index].src;
    document.querySelector(".current-song-image img").src = songs[index].img;
}

// Toggle play/pause
playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.querySelector("i").classList.replace("fa-play", "fa-pause");
    } else {
        audioPlayer.pause();
        playBtn.querySelector("i").classList.replace("fa-pause", "fa-play");
    }
});

// Play next song
nextBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playBtn.querySelector("i").classList.replace("fa-play", "fa-pause");
});

// Play previous song
prevBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playBtn.querySelector("i").classList.replace("fa-play", "fa-pause");
});

// Update progress slider as audio plays
audioPlayer.addEventListener("timeupdate", () => {
    progressSlider.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Seek audio
progressSlider.addEventListener("input", () => {
    audioPlayer.currentTime = (progressSlider.value / 100) * audioPlayer.duration;
});

// Shuffle and repeat button visual feedback (optional)
document.querySelectorAll(".shuffle-btn, .repeat-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});

// Load the first song
loadSong(songIndex);

//   Setting dropdown 
document.getElementById('settingsDropdown').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    // Toggle visibility
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Optional: Close dropdown if clicked outside
document.addEventListener('click', function (event) {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const settingsDropdown = document.getElementById('settingsDropdown');
    if (!settingsDropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
