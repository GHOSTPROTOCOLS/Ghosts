// Open a specified terminal (either re:GHOST or re:DUST)
function openManifesto(terminalId) {
    const terminal = document.getElementById(terminalId);
    if (terminal) {
        terminal.style.display = 'flex';
        if (terminalId === 'terminal') {
            displayText('terminal-content', linesGHOST);
        } else if (terminalId === 'terminalDust') {
            displayText('terminalDust-content', linesDUST);
        } else if (terminalId === 'terminalPump') {
            displayText('terminalPump-content', linesPUMP);
        }
    } else {
        console.error(`Terminal ${terminalId} not found.`);
    }
}

// Close a specified terminal
function closeManifesto(terminalId) {
    const terminal = document.getElementById(terminalId);
    const terminalContent = terminal.querySelector('.terminal-content');
    if (terminal && terminalContent) {
        terminal.style.display = 'none';
        terminalContent.innerHTML = ''; // Clear text on close
    } else {
        console.error(`Terminal or terminal-content element ${terminalId} not found.`);
    }
}

// New text for re:GHOST
const linesGHOST = [
    "C:\\>EXECUTE_MISSION.exe",
    "[INITIATING...] CyberOps::MarketInfiltration v2.077",
    ">> JACKING_IN_PROGRESS",
    ">> TARGET_ACQUIRED: ?pref_project?",
    ">> STEALTH_MODE: ACTIVATED",
    "",
    "> def ghost_mod(target_project):",
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
    ">> ETA_TO_FUTURE: NOW",
    "",
    "C:\\>WAKE_UP_SAMURAI.exe"
];

// Existing text for re:DUST
const linesDUST = [
    "C:\\>INIT_DUST_PROTOCOL.exe",
    "[LOADING...] Crypto::Dust::Aggregator v0.1.3",
    ">> SCANNING_BLOCKCHAIN_NETWORK",
    ">> DUST_DETECTED: 1000000+ wallets",
    ">> UNUTILIZED_ASSETS: $BILLIONS",
    "",
    "> def DUST_PROTOCOL():",
    "    \"\"\"Middle_finger.raise() to wasted_assets\"\"\"",
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
    "        self.supported_chains = [",
    "            \"EVM\", \"SOLANA\", \"COSMOS\", \"SONEIUM\", \"MONAD\"",
    "        ]",
    "",
    "    def integrate(self, platform):",
    "        platform.extract_revenue(self.generated_income)",
    "        platform.customize_distribution(self.capital)",
    "",
    "> EXECUTE DustProtocol.sweep_all()",
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
    ">> CTO_PUMPING: ACTIVE",
    ">> MODULARITY: 100%",
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

function displayText(contentId, textArray) {
    const terminalContent = document.getElementById(contentId);
    if (terminalContent) {
        terminalContent.innerHTML = ''; // Reset content on open
        let index = 0;
        function nextLine() {
            if (index < textArray.length) {
                const line = document.createElement('div');
                line.textContent = textArray[index];
                terminalContent.appendChild(line);
                index++;
                const delay = extendedLines.includes(textArray[index - 1]) ? 3000 : 800;
                setTimeout(nextLine, delay);
            }
        }
        nextLine();
    } else {
        console.error(`Terminal content element ${contentId} not found.`);
    }
}

// Open a video popup and start playing the video
function openVideo(videoId) {
    const videoPopup = document.getElementById(videoId);
    if (videoPopup) {
        videoPopup.style.display = 'flex';
        const videoElement = videoPopup.querySelector('video');
        videoElement.play();
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
        videoElement.currentTime = 0;
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

// Apply dragging to all elements
window.onload = function() {
    const terminal = document.getElementById('terminal');
    const terminalDust = document.getElementById('terminalDust');
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');

    makeDraggable(terminal, terminal.querySelector('.terminal-header'));
    makeDraggable(terminalDust, terminalDust.querySelector('.terminal-header'));
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
