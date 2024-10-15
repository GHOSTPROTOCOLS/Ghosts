// Open the manifesto terminal
function openManifesto() {
    const terminal = document.getElementById('terminal');
    if (terminal) {
        terminal.style.display = 'flex';
        displayText();
    } else {
        console.error('Terminal element not found.');
    }
}

// Close the manifesto terminal
function closeManifesto() {
    const terminal = document.getElementById('terminal');
    const terminalContent = document.getElementById('terminal-content');
    if (terminal && terminalContent) {
        terminal.style.display = 'none';
        terminalContent.innerHTML = ''; // Clear text on close
    } else {
        console.error('Terminal or terminal-content element not found.');
    }
}

// Styled text to simulate coding lines in the terminal
const lines = [
    "> Initializing System...",
    "> Connecting to the datasphere...",
    "> Jacking into the datasphere to outmaneuver corp rivals.",
    "> Loading modules...",
    "mod-load --inject \"blackice.exe\"",
    "> No frontal assault; ghost-modding, injecting our proprietary blackice.",
    "> tech-scrape --target hottest_tech --filter latest",
    "> Picking the hottest tech and recoding it into a reality-warping expansion pack.",
    "> recode --expansion --mode warp",
    "> Users'll get their synapses rewired experiencing a whole new level of digital ecstasy.",
    "> market-drop --mode stealth --value high",
    "> This lets us stealth-drop into the market, dodging aggro while delivering god-tier value to the meat puppets.",
    "> In the long game, we'll be the chrome-plated cyber-shamans of the new digital frontier.",
    "> Welcome to the future, samurai.",
    "> echo 'Welcome to the future, samurai.'",
    "> echo 'Welcome to the future, samurai.'",
    "> System Shutdown..."
];

let lineIndex = 0;

function displayText() {
    const terminalContent = document.getElementById('terminal-content');
    if (terminalContent) {
        terminalContent.innerHTML = ''; // Reset content on open
        lineIndex = 0;

        const interval = setInterval(() => {
            if (lineIndex < lines.length) {
                const line = document.createElement('div');
                line.textContent = lines[lineIndex];
                terminalContent.appendChild(line);
                lineIndex++;
            } else {
                clearInterval(interval); // Stop interval once all lines are displayed
            }
        }, 800); // Display each line every 0.8 seconds
    } else {
        console.error('Terminal content element not found.');
    }
}

// Open a video popup and start playing the video
function openVideo(videoId) {
    const videoPopup = document.getElementById(videoId);
    if (videoPopup) {
        videoPopup.style.display = 'flex';
        const videoElement = videoPopup.querySelector('video');
        videoElement.play(); // Start playing the video
    } else {
        console.error(`Video popup ${videoId} not found.`);
    }
}

// Close a video popup and stop the video
function closeVideo(videoId) {
    const videoPopup = document.getElementById(videoId);
    if (videoPopup) {
        videoPopup.style.display = 'none';
        const videoElement = videoPopup.querySelector('video');
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video to start
    } else {
        console.error(`Video popup ${videoId} not found.`);
    }
}

// Clock function as before
function updateClock() {
    const clock = document.getElementById('clock');
    if (clock) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        clock.textContent = `${hours}:${minutes}`;
    } else {
        console.error('Clock element not found.');
    }
}

// Update clock every minute
setInterval(updateClock, 60000);
updateClock(); // Initial call to display clock immediately
