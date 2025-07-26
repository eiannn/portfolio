// Scroll fade-in effect
const sections = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 600;
    if (scrollY > sectionTop) {
      section.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Typing Animation for Animated Text
const texts = ["Edrian Castillon", "Game Developer", "Designer", "Sporty"];
const animatedText = document.getElementById("animated-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  if (isDeleting) {
    animatedText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    animatedText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// 🎵 Music Play / Pause Toggle with Animation
const musicBtn = document.getElementById('music-toggle-btn');
const musicAudio = document.getElementById('luffy-song');

musicBtn.addEventListener('click', () => {
  if (musicAudio.paused) {
    musicAudio.play();
    musicBtn.classList.add('playing');
  } else {
    musicAudio.pause();
    musicBtn.classList.remove('playing');
  }
});

// Toggle "See More" for Achievements section (scrollable gallery)
const seeMoreBtn = document.getElementById("seeMoreBtn");
seeMoreBtn.addEventListener("click", function () {
  const wrapper = document.getElementById("scrollWrapper");
  wrapper.classList.toggle("d-none");
  wrapper.classList.add("animate__animated", "animate__fadeInUp");
});

// Section switcher (e.g., projects/languages)
function showSection(id) {
  const projectSec = document.getElementById("projects-gallery");
  const langSec = document.getElementById("languages-gallery");

  // Hide both first
  projectSec.classList.add("d-none");
  langSec.classList.add("d-none");

  // Show selected with fade-in
  const target = document.getElementById(id);
  target.classList.remove("d-none");
  target.classList.add("fade-in");

  // Remove fade-in after animation ends to reset
  setTimeout(() => {
    target.classList.remove("fade-in");
  }, 1000);
}

function showSection(id) {
  const projectSec = document.getElementById("projects-gallery");
  const langSec = document.getElementById("languages-gallery");

  // Hide both sections first
  projectSec.classList.add("d-none");
  langSec.classList.add("d-none");

  // Remove fade-in from both (in case it's left over from before)
  projectSec.classList.remove("fade-in");
  langSec.classList.remove("fade-in");

  // Show the selected section and add animation
  const target = document.getElementById(id);
  target.classList.remove("d-none");
  target.classList.add("fade-in");

  // Scroll to the revealed section after a slight delay
  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100); // Delay ensures the content is rendered before scrolling
}
