document.addEventListener("DOMContentLoaded", function () {
    const words = ["GAMING.", "FAMILY.", "THE FUTURE.", "MELTDOWN LEGION."];
    let wordIndex = 0;
    const dynamicTextElement = document.getElementById("dynamicText");
    let typingSpeed = 250;
    let pauseTime = 3500;
    let deletingSpeed = 150;

    function typeWord(word, callback) {
        let charIndex = 0;
        function type() {
            if (charIndex < word.length) {
                dynamicTextElement.textContent += word[charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(callback, pauseTime);
            }
        }
        type();
    }

    function deleteWord(callback) {
        let charIndex = dynamicTextElement.textContent.length;
            function deleteChar() {
                if (charIndex > 0) {
                    dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1);
                    charIndex--;
                    setTimeout(deleteChar, deletingSpeed);
                } else {
                    callback();
                }
            }
        deleteChar();
    }

    function cycleWords() {
        typeWord(words[wordIndex], function () {
            deleteWord(function () {
                wordIndex = (wordIndex + 1) % words.length;
                cycleWords();
            });
        });
    }

    cycleWords();
});
