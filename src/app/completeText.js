
/**
 * @param {string} fullText
 * @returns {string}
 * @param {{ speed: number; currentLength: number; }} options
 */
function completeText(fullText, options) {
    const completionLength = Math.random() * options.speed + 1; // no clue why +1 is needed, it just breaks without it.
    return fullText.slice(0, options.currentLength + completionLength);
}

export default completeText;