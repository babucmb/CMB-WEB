const heroText = document.querySelector('.hero-text');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const typingWords = [
  'LLM-powered products',
  'RAG systems',
  'multi-agent AI workflows',
  'production-focused ML solutions'
];

function typeEffect() {
  if (!heroText) return;
  let wordIndex = 0;
  let charIndex = 0;
  let currentText = '';

  setInterval(() => {
    if (charIndex < typingWords[wordIndex].length) {
      currentText += typingWords[wordIndex][charIndex];
      charIndex += 1;
    } else {
      setTimeout(() => {
        currentText = '';
        charIndex = 0;
        wordIndex = (wordIndex + 1) % typingWords.length;
      }, 800);
    }
    heroText.textContent = `I build ${currentText}`;
  }, 80);
}

typeEffect();
