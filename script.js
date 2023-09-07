function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const typeWriterText = document.getElementById("typeWriterText");
const textArray = ["Python Developer", "FrontEnd Developer", "AWS Solutions Architect Associate", "AWS Developer Associate", "Terraform Associate"]; // Add more here if needed
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textArray[textIndex];
  if (isDeleting) {
    typeWriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeWriterText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause at the end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex++;
    if (textIndex >= textArray.length) {
      textIndex = 0;
    }
    setTimeout(type, 500); // Pause before typing next text
  } else {
    setTimeout(type, 100); // Typing speed
  }
}

// Start the typewriter effect when the page loads
window.onload = type;
