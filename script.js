// Sequentially fade in sentences without fading out
const sentences = document.querySelectorAll('.sentence');
let index = 0;

const showSentence = () => {
    // Fade in the current sentence
    sentences[index].style.opacity = '1';

    // Move to the next sentence
    index++;

    // Stop the interval once all sentences are shown
    if (index === sentences.length) {
        clearInterval(interval);
    }
};

// Start the animation with a 1-second initial delay, and then fade in each sentence every 2 seconds
setTimeout(() => {
    var interval = setInterval(showSentence, 2000); // Each sentence appears every 2 seconds
}, 1); // Initial delay of 1 second before starting
