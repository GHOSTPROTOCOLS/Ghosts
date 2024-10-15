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
    "> In the long game, we'll be the chrome-plated cyber-shamans of the new digital frontier.",,
    "> Welcome to the future, samurai.",
    "> System Shutdown..."
];

// Define lines that require a longer display time
const extendedLines = [
    "> Initializing System...",
    "> Connecting to the datasphere...",
    "> Loading modules...",
    "> recode --expansion --mode warp",
    "> market-drop --mode stealth --value high",
    "> Welcome to the future, samurai."
];

let lineIndex = 0;

function displayText() {
    const terminalContent = document.getElementById('terminal-content');
    if (terminalContent) {
        terminalContent.innerHTML = ''; // Reset content on open
        lineIndex = 0;

        displayNextLine();
    } else {
        console.error('Terminal content element not found.');
    }
}

function displayNextLine() {
    if (lineIndex < lines.length) {
        const lineText = lines[lineIndex];
        const line = document.createElement('div');
        line.textContent = lineText;
        document.getElementById('terminal-content').appendChild(line);

        // If line requires extended display duration
        const delay = extendedLines.includes(lineText) ? 3000 : 800; // 3 seconds for extended lines, otherwise 0.8 seconds
        lineIndex++;
        setTimeout(displayNextLine, delay);
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

// Make elements draggable
function makeDraggable(draggableElement, handleElement) {
    let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

    handleElement.onmousedown = startDrag;

    function startDrag(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = stopDrag;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e.preventDefault();
        offsetX = mouseX - e.clientX;
        offsetY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;
        draggableElement.style.top = (draggableElement.offsetTop - offsetY) + "px";
        draggableElement.style.left = (draggableElement.offsetLeft - offsetX) + "px";
    }

    function stopDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Apply dragging to the terminal and video popups
window.onload = function() {
    const terminal = document.getElementById('terminal');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    makeDraggable(terminal, terminal.querySelector('.terminal-header'));
    makeDraggable(video1, video1.querySelector('.video-header'));
    makeDraggable(video2, video2.querySelector('.video-header'));
};

// Display the current time in the taskbar clock
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
