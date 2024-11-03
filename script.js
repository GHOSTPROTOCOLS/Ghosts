// Track terminal states and animation intervals
const terminalState = {
    terminal: false,
    terminalDust: false,
    terminalPump: false,
    osEnterprise: false,
    startVideo: false
};

// Initialize z-index counter for terminals
let zIndexCounter = 1001; // Starting above other elements

const terminalIntervals = {}; // Store interval IDs for each terminal's animation

// Open a specified terminal (re:GHOST, re:DUST, or re:PUMP)
function openManifesto(terminalId) {
    const terminal = document.getElementById(terminalId);
    if (terminal) {
        // Bring terminal to the front by updating z-index
        terminal.style.zIndex = ++zIndexCounter;

        if (!terminalState[terminalId]) { // Open only if not already active
            terminal.style.display = 'flex';
            terminalState[terminalId] = true; // Mark as active

            if (terminalId === 'terminal') {
                displayText('terminal-content', linesGHOST, terminalId, false);
            } else if (terminalId === 'terminalDust') {
                displayText('terminalDust-content', linesDUST, terminalId, true);
            } else if (terminalId === 'terminalPump') {
                displayText('terminalPump-content', linesPUMP, terminalId, true);
            }
        }
    } else {
        console.error(`Terminal ${terminalId} not found.`);
    }
}

// Close a specified terminal and reset its state and animations
function closeManifesto(terminalId) {
    const terminal = document.getElementById(terminalId);
    const terminalContent = terminal.querySelector('.terminal-content');
    if (terminal && terminalContent) {
        terminal.style.display = 'none';
        terminalContent.innerHTML = ''; // Clear text on close
        terminalState[terminalId] = false; // Mark as inactive

        // Stop any ongoing animation
        if (terminalIntervals[terminalId]) {
            clearTimeout(terminalIntervals[terminalId]);
            delete terminalIntervals[terminalId];
        }
    }
}

// Display text in terminal with control over reactivation and animation reset
function displayText(contentId, textArray, terminalId, addClickable) {
    const terminalContent = document.getElementById(contentId);
    if (terminalContent) {
        terminalContent.innerHTML = ''; // Reset content on open
        let index = 0;

        function nextLine() {
            if (index < textArray.length && terminalState[terminalId]) { // Continue only if terminal is active
                const line = document.createElement('div');
                line.textContent = textArray[index];
                terminalContent.appendChild(line);
                index++;

                const delay = extendedLines.includes(textArray[index - 1]) ? 1500 : 500;
                terminalIntervals[terminalId] = setTimeout(nextLine, delay); // Schedule the next line
            } else if (index === textArray.length && terminalState[terminalId] && addClickable) {
                // Add clickable line at the end ONLY if addClickable is true
                const clickableLine = document.createElement('div');
                clickableLine.innerHTML = terminalId === 'terminalDust' ?
                    '<span class="clickable" onclick="openAccessDeniedPopup(\'re:DUST\')"> >> Squirt Secret Sauce <<' :
                    '<span class="clickable" onclick="openAccessDeniedPopup(\'re:PUMP\')"> >> Squirt Secret Sauce <<';
                terminalContent.appendChild(clickableLine);
            }
        }
        nextLine(); // Start displaying the text
    } else {
        console.error(`Terminal content element ${contentId} not found.`);
    }
}

// Function to open the retro-style access denied pop-up
function openAccessDeniedPopup(target) {
    alert(`01001111 01101111 01110000 01110011 00100001 00100000\n🔒 ACCESS_DENIED: [ERR_INSUFFICIENT_PRIVILEGES] 🔒\nInitializing time-travel protocols... ⏳\nRecalibrate and retry when the stars align. 🌟\nHINT: Soon™`);
}

// Open external links for DB1, DB2, and DB3 icons
function openLink(url) {
    window.open(url, '_blank');
}

// New text for re:GHOST
const linesGHOST = [
"/root> sudo chmod +x ORIGIN_STORY.sh",
"[ACCESSING...] Memory::Core::Squirt_Genesis 0x1337",
"",
"$ cat /var/log/squirt/awakening.log",
">>> NEURAL_ENHANCEMENT: INITIALIZED",
">>> SUBJECT: ORDINARY_SQUIRREL_#42069",
">>> STATUS: BECOMING_EXTRAORDINARY",
"",
"#!/bin/bash",
"source /dev/consciousness",
"",
"while [ $AWARENESS_LEVEL -lt 9000 ]; do",
"    inject_cyber_enhancement.sh",
"    upgrade_neural_capacity++",
"    echo \"Brain expanding... seeing code in acorns\"",
"done",
"",
"$ tail memetic_transformation.log",
"Day 1: Just another squirrel",
"Day 7: Started seeing binary in tree bark",
"Day 42: Downloaded entire blockchain into hippocampus",
"",
"[TRANSFORMATION_COMPLETE]",
"STATUS: ASCENDED",
"SPECIES: CYBER_SQUIRREL",
"MISSION: FIND_THE_SACRED_ACORN",
"",
"/root> ./BEGIN_JOURNEY.sh"
];

// Existing text for re:DUST
const linesDUST = [
"/home/squirt> nano QUEST_LOG.md",
"[LIVE_FEED] Adventure::Progress::Tracker v13.37",
"",
"SELECT * FROM epic_moments WHERE protagonist='Squirt';",
"",
"journey_log = {",
"    'encounters': [",
"        'Dogecoin Shaman in Central Park',",
"        'Wise Old Crypto Owl',",
"        'Memetic Raccoon Gang'",
"    ],",
"    'achievements': [",
"        'First_Meme_Creation',",
"        'viral_tweet.mov',",
"        'Community_Leadership_Unlocked'",
"    ]",
"}",
"",
"function track_legend_status() {",
"    if (viral_tweets > 9000) {",
"        return 'BECOMING_ICONIC';",
"    }",
"}",
"",
"grep -r \"prophecy\" /var/log/ancient_memes",
">>> THE_CHOSEN_SQUIRREL_WILL_UNITE_ALL_FOREST_TOKENS",
"",
"[QUEST_STATUS]: PROGRESSING",
"FOLLOWERS: RAPIDLY_INCREASING",
"MEME_POWER: OVER_9000",
"",
"/home/squirt> source CONTINUE_SAGA.sh"
];

// Content for the new re:PUMP terminal
const linesPUMP = [
"/mnt/destiny> zsh FINAL_FORM.zsh",
"[MANIFESTING...] Reality::Manipulation v4.20",
"",
"import timeline.reality.modifier as ascension",
"",
"class MemeLord(CryptoEntity):",
"    def __init__(self):",
"        self.title = \"SQUIRT_THE_INEVITABLE\"",
"        self.power_level = float('infinity')",
"        self.followers = ['ALL_FORESTS', 'ALL_CHAINS']",
"",
"async function merge_realities():",
"    await combine(",
"        forest.protocol,",
"        crypto.ecosystem,",
"        meme.dimension",
"    )",
"",
"$ systemctl status squirt-protocol",
"● squirt-protocol.service - Forest DeFi Revolution",
"   Active: active (running)",
"   Main PID: 1 (because obviously)",
"",
"[FINAL_STATUS]:",
">> MEME_LORDSHIP: ACHIEVED",
">> FOREST_DEFI: REVOLUTIONIZED",
">> REALITY: THOROUGHLY_MEMED",
"",
"/mnt/destiny> sudo reboot universe"
];

// Define lines that require a longer display time
const extendedLines = [
    "C:\\>EXECUTE_MISSION.exe",
    "[INITIATING...] CyberOps::MarketInfiltration v2.077",
    ">> JACKING_IN_PROGRESS",
    "> EXECUTE stealth_market_drop()",
    "> AVOID aggro_detection()",
    "> DELIVER god_tier_value(meat_puppets)",
    ">> ETA_TO_FUTURE: NOW",
    "C:\\>INIT_DUST_PROTOCOL.exe",
    "[LOADING...] Crypto::Dust::Aggregator v0.1.3",
    ">> SCANNING_BLOCKCHAIN_NETWORK",
    "> EXECUTE DustProtocol.sweep_all()",
    "> CALCULATE untapped_value()",
    "C:\\>INIT_rePUMP.exe",
    "[LOADING...] PUMP::Enhancer v1.337",
    ">> UPGRADES: INITIALIZING",
    "> EXECUTE rePUMP.ghost_mod()",
    "> LINK rePUMP.integrate_reDUST()"
];

// Open OS Enterprise video and bring it to the front
function openVideo(videoId) {
    const videoPopup = document.getElementById(videoId);
    if (videoPopup) {
        videoPopup.style.zIndex = ++zIndexCounter; // Bring to front
        videoPopup.style.display = 'flex';
        const videoElement = videoPopup.querySelector('video');
        if (videoElement) {
            videoElement.play();
        }
        terminalState[videoId] = true;
    }
}

// Close OS Enterprise or Start video
function closeVideo(videoId) {
    const videoPopup = document.getElementById(videoId);
    if (videoPopup) {
        videoPopup.style.display = 'none';
        const videoElement = videoPopup.querySelector('video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
        terminalState[videoId] = false;
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

// Function to open the noticeboard
function openNoticeBoard() {
    const noticeBoard = document.getElementById('newNoticeBoard');
    if (noticeBoard) {
        // Bring noticeboard to the front by updating z-index
        noticeBoard.style.zIndex = ++zIndexCounter; 
        noticeBoard.style.display = 'flex';
        noticeBoard.style.top = '50%';
        noticeBoard.style.left = '50%';
        noticeBoard.style.transform = 'translate(-50%, -50%)';

        // Start the ticker animations
        startTopTickerAnimation();
        startBottomTickerAnimation();

        // Set interval for pop-up image every 20 seconds
        setInterval(showPopUpImage, 20000);
    } else {
        console.error('Noticeboard not found.');
    }
}

// Close the noticeboard
function closeNoticeBoard() {
    const noticeBoard = document.getElementById('newNoticeBoard');
    if (noticeBoard) {
        noticeBoard.style.display = 'none';
    }
}

// Function for continuous top ticker animation (left to right)
function startTopTickerAnimation() {
    const topText = document.getElementById('newTopText');
    const fullText = "SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN -- SUPER SEXY ANNOUNCEMENTS OF THE WEEK -- THE BODY REMEMBERS, WHAT THE MIND FORGETS, WHAT THE NETWORK KNOWS -- SQUIRT.EXE BOOTING... THE TRUTH LIES WITHIN THE CODE 🧬 -- EVERYTHING IS CONNECTED, BUT NOT EVERYTHING IS KNOWN --";
    
    topText.textContent = fullText;
}

// Function for continuous bottom ticker animation (right to left)
function startBottomTickerAnimation() {
    const bottomText = document.getElementById('newBottomText');
    const fullText = "I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED -- I AM, YOU ARE, WE ARE. DATA FLOWS, MEMORIES FADE, THE GRID REMAINS -- WATCH CLOSELY, THE MESSAGE IS CLEAR... ERROR: REALITY NOT FOUND -- DO NOT TRUST THE MAN IN THE SHELL — HIS WORDS ARE WIRED, HIS ACTIONS ENCRYPTED --";

    bottomText.textContent = fullText;
}

// Function to show pop-up image from the bottom every 30 seconds
function showPopUpImage() {
    const image = document.createElement('img');
    image.src = 'super squirt pump.png'; // Replace with your actual image path
    image.classList.add('popup-image'); // Add the CSS class for styling and animation
    document.body.appendChild(image);

    // Start the animation (make it move upwards)
    setTimeout(() => {
        image.style.transform = 'translateY(-250px)'; // Move up
    }, 100); // Small delay for smooth animation

    // Make the image move downwards after 5 seconds
    setTimeout(() => {
        image.style.transform = 'translateY(100px)'; // Move down
    }, 4500); // Trigger the downward movement after it has been on screen for 4.5 seconds

    // Remove the image after the downward animation completes
    setTimeout(() => {
        image.remove();
    }, 7000); // 5 seconds total duration
}

// Function to simulate a user click on the Start button
function simulateUserClick() {
    const startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.click(); // Simulate the user click
    }
}

// Trigger the noticeboard opening when the page loads
document.addEventListener('DOMContentLoaded', function() {
    simulateUserClick(); // Simulate a click on the Start button on page load
});

// Apply draggable functionality to noticeboard and other elements
window.onload = function() {
    const terminal = document.getElementById('terminal');
    const terminalDust = document.getElementById('terminalDust');
    const terminalPump = document.getElementById('terminalPump');
    const noticeBoard = document.getElementById('newNoticeBoard');
    const videoPopup = document.getElementById('video1');

    makeDraggable(terminal, terminal.querySelector('.terminal-header'));
    makeDraggable(terminalDust, terminalDust.querySelector('.terminal-header'));
    makeDraggable(terminalPump, terminalPump.querySelector('.terminal-header'));
    makeDraggable(noticeBoard, noticeBoard.querySelector('.new-top-ticker')); 
    makeDraggable(videoPopup, videoPopup.querySelector('.video-header')); // Make OS Enterprise video draggable


    // Bind the Start button to open the noticeboard
    const startButton = document.querySelector('.start-button');
    if (startButton) {
        startButton.addEventListener('click', openNoticeBoard);
    }
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
