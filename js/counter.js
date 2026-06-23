document.addEventListener('DOMContentLoaded', () => {
    const counterInput = document.getElementById('counter-input');
    const statWords = document.getElementById('stat-words');
    const statChars = document.getElementById('stat-chars');
    const statSentences = document.getElementById('stat-sentences');
    const statParagraphs = document.getElementById('stat-paragraphs');

    if (!counterInput) return; // Only run on pages with this tool

    counterInput.addEventListener('input', () => {
        const text = counterInput.value;
        
        // Characters
        statChars.textContent = text.length;

        // Words
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        statWords.textContent = words.length;

        // Sentences (simple approximation based on punctuation)
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        statSentences.textContent = sentences.length;

        // Paragraphs
        const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
        statParagraphs.textContent = paragraphs.length;
    });
});
