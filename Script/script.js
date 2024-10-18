// Array of translations
const translations = [
    "Web Designer",
    "Java Developer",
    "Content Writer"
];

let currentIndex = 0;  // Set initial index
let charIndex = 0;     // To track the current character
let typingSpeed = 150; // Speed of typing each character
let removingSpeed = 100; // Speed for removing each character

// Typing Effect
function typeText() {
    const dynamicText = document.getElementById("typed-text");

    // Get the current word
    let currentWord = translations[currentIndex];

    // Type one letter at a time
    if (charIndex < currentWord.length) {
        dynamicText.textContent += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        // After finishing the word, wait for a delay, then start removing letters
        setTimeout(removeText, 1000);  // 2-second pause before removing the word
    }
}

// Function to remove text letter by letter
function removeText() {
    const dynamicText = document.getElementById("typed-text");

    // Remove one letter at a time
    if (charIndex > 0) {
        dynamicText.textContent = dynamicText.textContent.slice(0, -1);
        charIndex--;
        setTimeout(removeText, removingSpeed);
    } else {
        // After all letters are removed, move to the next word
        currentIndex = (currentIndex + 1) % translations.length; // Move to next word
        setTimeout(typeText, typingSpeed);  // Start typing the next word
    }
}

// Start typing the first word
typeText();
