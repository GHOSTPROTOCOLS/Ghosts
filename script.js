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
                    '<span class="clickable" onclick="openAccessDeniedPopup(\'re:DUST\')">Click here to open re:DUST</span>' :
                    '<span class="clickable" onclick="openAccessDeniedPopup(\'re:PUMP\')">Click here to open re:PUMP</span>';
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
    "C:\\>EXECUTE_MISSION.exe",
    "[INITIATING...] CyberOps::MarketInfiltration v2.077",
    ">> JACKING_IN_PROGRESS",
    ">> TARGET_ACQUIRED: PREF PROJECT",
    ">> STEALTH_MODE: ACTIVATED",
    "",
    "> def re_mod(target_project):",
    "    inject(proprietary_blackice)",
    "    cherry_pick(hottest_tech)",
    "    recode_reality(target_project)",
    "    return reality_warping_expansion_pack",
    "",
    "> class SynapseRewirer:",
    "    def __init__(self):",
    "        self.digital_ecstasy_level = \"WHOLE_NEW\"",
    "",
    "    def rewire(self, user):",
    "        user.experience(self.digital_ecstasy_level)",
    "",
    "> EXECUTE stealth_market_drop()",
    "> AVOID aggro_detection()",
    "> DELIVER god_tier_value(meat_puppets)",
    "",
    "[LONG_GAME_STRATEGY]:",
    "    while True:",
    "        self.status = \"chrome_plated_cyber_shaman\"",
    "        digital_frontier.conquer()",
    "",
    ">> MISSION_STATUS: IN_PROGRESS",
    ">> ETA: NOW",
    "",
    "C:\\>WAKE_UP_SAMURAI.exe"
];

// Existing text for re:DUST
const linesDUST = [
    "C:\\>INIT_re_DUST.exe",
    "[LOADING...] Crypto::Dust::Aggregator v0.1.3",
    ">> SCANNING_BLOCKCHAIN_NETWORK",
    ">> DUST_DETECTED: 1000000+ wallets",
    ">> UNUTILIZED_ASSETS: $HECTOCORNS",
    "",
    "> def re:DUST_PROTOCOL():",
    "    for wallet in BLOCKCHAIN.wallets:",
    "        if wallet.balance < DUST_THRESHOLD:",
    "            DUST_PROTOCOL.sweep(wallet)",
    "",
    "    DUST = aggregate(swept_assets)",
    "    OPPORTUNITY = create_regenerative_finance(DUST)",
    "    return OPPORTUNITY",
    "",
    "> class DustIntegrator:",
    "    def __init__(self):",
    "        self.supported_chains = ",
    "           -- INFINITE MODULARITY --",
    "",
    "    def integrate(self, platform):",
    "        platform.extract_revenue(self.generated_income)",
    "        platform.customize_distribution(self.capital)",
    "",
    "> EXECUTE re:DUST.sweep_all()",
    "> TRANSFORM dust_to_usable_assets()",
    "> CALCULATE untapped_value()",
    "",
    "[OUTPUT]: Billions_in_value = Millions_of_wallets * Dust_per_wallet",
    "",
    "C:\\>INITIATE_CRYPTO_REVOLUTION.exe"
];

// Content for the new re:PUMP terminal
const linesPUMP = [
    "C:\\>INIT_rePUMP.exe",
    "[LOADING...] PUMP::Enhancer v1.337",
    "",
    ">> TARGETING: PUMP.fun",
    ">> MODE: GHOST_MOD",
    ">> UPGRADES: INITIALIZING",
    "",
    "> class rePUMP(PUMPfun):",
    "    def __init__(self):",
    "        super().__init__()",
    "        self.filters = self.filters.upgrade()",
    "        self.tabs.add(\"influencer\")",
    "        self.fees = FeeRedistributor()",
    "        self.cto_pumping = True",
    "",
    "    def ghost_mod(self):",
    "        self.interface = PUMPfun.interface  # No new UI",
    "        self.experience = \"enhanced\"",
    "",
    "> def integrate_reDUST():",
    "    reDUST.connect(rePUMP)",
    "    enable_dust_token_farming()",
    "",
    "    while True:",
    "        promising_project = reDUST.scan_bonding_projects()",
    "        if promising_project:",
    "            reDUST.swap(promising_project)",
    "",
    "> EXECUTE rePUMP.ghost_mod()",
    "> LINK rePUMP.integrate_reDUST()",
    "",
    "[STATUS]:",
    ">> FILTERS: SHARPENED",
    ">> INFLUENCER_TAB: ONLINE",
    ">> FEES: REDISTRIBUTING",
    "",
    "C:\\>ENHANCE_YOUR_REALITY.exe"
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
        noticeBoard.style.display = 'flex';
        noticeBoard.style.top = '50%';
        noticeBoard.style.left = '50%';
        noticeBoard.style.transform = 'translate(-50%, -50%)';

        const videoElement = document.getElementById('introVideo');
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch((error) => {
                console.error("Autoplay prevented by the browser.", error);
            });
        }

        // Start the ticker animations
        startTopTickerAnimation();
        startBottomTickerAnimation();
    } else {
        console.error('Noticeboard not found.');
    }
}

// Close the noticeboard
function closeNoticeBoard() {
    const noticeBoard = document.getElementById('newNoticeBoard');
    if (noticeBoard) {
        noticeBoard.style.display = 'none';
        const videoElement = document.getElementById('introVideo');
        videoElement.pause();
        videoElement.currentTime = 0;
    }
}

// Function to calculate animation duration for top ticker (right to left)
function setTopTickerAnimation(tickerId, textArray, baseSpeed) {
    const ticker = document.getElementById(tickerId);
    const containerWidth = 1500;
    let textIndex = 0;

    function updateTicker() {
        const sentence = textArray[textIndex];
        ticker.textContent = sentence;

        // Calculate animation duration
        const textWidth = ticker.scrollWidth;
        const duration = (textWidth + containerWidth) / containerWidth * baseSpeed;

        // Apply the animation (right to left)
        ticker.style.animation = 'none';
        void ticker.offsetHeight;  // Trigger reflow to reset animation
        ticker.style.animation = `scroll-across ${duration}s linear`;

        // Move to the next sentence
        textIndex = (textIndex + 1) % textArray.length;

        // Update after the animation completes
        setTimeout(updateTicker, duration * 1000);
    }

    updateTicker(); // Start with the first line
}

// Function to calculate animation duration for bottom ticker (left to right)
function setBottomTickerAnimation(tickerId, textArray, baseSpeed) {
    const ticker = document.getElementById(tickerId);
    const containerWidth = 1500;
    let textIndex = 0;

    function updateTicker() {
        const sentence = textArray[textIndex];
        ticker.textContent = sentence;

        // Calculate animation duration
        const textWidth = ticker.scrollWidth;
        const duration = (textWidth + containerWidth) / containerWidth * baseSpeed;

        // Apply the animation (left to right)
        ticker.style.animation = 'none';
        void ticker.offsetHeight;  // Trigger reflow to reset animation
        ticker.style.animation = `scroll-left-to-right ${duration}s linear`;

        // Move to the next sentence
        textIndex = (textIndex + 1) % textArray.length;

        // Update after the animation completes
        setTimeout(updateTicker, duration * 1000);
    }

    updateTicker(); // Start with the first line
}

// Start the top ticker animation (right to left)
function startTopTickerAnimation() {
    setTopTickerAnimation('newTopText', [
        "The body remembers -- What the mind forgets -- What the Network knows",
        "Ghost.exe booting... The truth lies within the code 🧬",
        "Everything is connected, but not everything is known"
    ], 10); // Base speed of 10 seconds for the top ticker
}

// Start the bottom ticker animation (left to right)
function startBottomTickerAnimation() {
    setBottomTickerAnimation('newBottomText', [
        "🙉 -- DO NOT TRUST THE MAN IN THE SHELL -- 🙉",
        "I am, you are, we are. Data flows, memories fade, the grid remains",
        "Watch closely, the message is clear... Error: Reality not found"
    ], 10); // Base speed of 10 seconds for the bottom ticker
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
    const video1 = document.getElementById('video1');
    const startButton = document.querySelector('.start-button');
    const noticeBoard = document.getElementById('newNoticeBoard');

    makeDraggable(terminal, terminal.querySelector('.terminal-header'));
    makeDraggable(terminalDust, terminalDust.querySelector('.terminal-header'));
    makeDraggable(terminalPump, terminalPump.querySelector('.terminal-header'));
    makeDraggable(video1, video1.querySelector('.video-header'));
    makeDraggable(noticeBoard, noticeBoard.querySelector('.new-notice-header'));

    // Bind the Start button to open the noticeboard
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
