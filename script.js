// Personalize this website by editing the values in this section.
const CONFIG = {
  secretCode: "Sreya18",
  birthdayName: "Sreya"
};

const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();

$("beginButton").addEventListener("click", () => {
  burstConfetti(75);
  $("little-note").scrollIntoView({ behavior: "smooth" });
});

const quizQuestions = [
  {
    question: "What's Sreya's official birthday superpower?",
    hint: "Choose wisely. A totally unbiased committee is watching.",
    answers: [
      "Making people laugh at the worst time",
      "Being cute and pretending it's accidental",
      "Stealing snacks without evidence"
    ],
    responses: [
      "Correct. The giggle department is thriving. 😂",
      "Also correct. This quiz accepts all forms of iconic behaviour. 🎀",
      "Evidence has been deleted. You're free to go. 🍪"
    ]
  },
  {
    question: "Pick Sreya's birthday-day assignment:",
    hint: "There are no wrong answers. (The committee reserves the right to judge.)",
    answers: [
      "Eat cake like it's an Olympic sport",
      "Receive compliments and act surprised",
      "Take 87 photos to get the perfect one"
    ],
    responses: [
      "A champion's mindset. Cake podium incoming. 🏆",
      "Mission impossible: she already knows she's appreciated. 💗",
      "Only 87? We admire your restraint. 📸"
    ]
  },
  {
    question: "What should the universe send her this year?",
    hint: "Select your highly scientific prediction.",
    answers: [
      "Good luck and happy surprises",
      "Peace, confidence and big wins",
      "Unlimited snacks and zero bad days"
    ],
    responses: [
      "Request submitted to the universe. ✨",
      "Excellent choice. May the good things find you. 🌷",
      "A deeply reasonable life plan. 🍰"
    ]
  }
];
let quizIndex = 0;
function renderQuiz() {
  const q = quizQuestions[quizIndex];
  $("quizQuestion").textContent = q.question;
  $("quizHint").textContent = q.hint;
  $("quizFeedback").textContent = "";
  $("nextQuestion").classList.add("hidden");
  $("quizOptions").innerHTML = "";
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = answer;
    button.addEventListener("click", () => {
      [...$("quizOptions").children].forEach((b) => b.disabled = true);
      button.classList.add("chosen");
      $("quizFeedback").textContent = q.responses[index];
      $("nextQuestion").classList.remove("hidden");
      if (quizIndex === quizQuestions.length - 1) $("nextQuestion").textContent = "Play again ↻";
    });
    $("quizOptions").appendChild(button);
  });
}
$("nextQuestion").addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  renderQuiz();
});
renderQuiz();

$("codeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const entered = $("secretCode").value.trim();
  if (entered.toLowerCase() === CONFIG.secretCode.toLowerCase()) {
    $("codeMessage").textContent = "";
    $("unlockedMessage").classList.remove("hidden");
    $("secretCode").value = "";
    burstConfetti(55);
  } else {
    $("codeMessage").textContent = "Hmm, not quite! Try the special code again 💭";
    $("secretCode").classList.add("shake");
    setTimeout(() => $("secretCode").classList.remove("shake"), 450);
  }
});

function openGift() {
  $("giftArt").classList.add("open");
  $("giftTitle").textContent = "Surprise! You deserve lovely things. 💗";
  $("giftDescription").textContent = "Official birthday delivery: one bundle of good vibes.";
  $("giftReveal").classList.remove("hidden");
  $("openGift").classList.add("hidden");
  burstConfetti(60);
}
$("openGift").addEventListener("click", openGift);
$("giftArt").addEventListener("click", openGift);
$("giftArt").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openGift(); }
});

function openLetter() {
  $("envelope").classList.add("open");
  $("fullLetter").classList.remove("hidden");
  $("openLetter").textContent = "Your letter is open ♡";
}
$("openLetter").addEventListener("click", openLetter);
$("envelope").addEventListener("click", openLetter);
$("envelope").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLetter(); }
});

$("wishButton").addEventListener("click", () => {
  $("wishResult").textContent = "Wish sent! ✨ May a little bit of magic find you every day.";
  $("wishButton").textContent = "Wish sent ♡";
  burstConfetti(100);
});

function burstConfetti(count = 50) {
  const layer = $("confetti-layer");
  const symbols = ["✦", "♡", "✧", "•"];
  const colors = ["#e88eb1", "#f3c5d7", "#d9b9f2", "#ffe0a6", "#d96796"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "%";
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (10 + Math.random() * 15) + "px";
    piece.style.animationDelay = (Math.random() * .9) + "s";
    piece.style.animationDuration = (2.4 + Math.random() * 1.8) + "s";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 5200);
  }
}

// Gentle reveal animation as sections enter view.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

// Optional music: place a legally usable music.mp3 next to index.html.
// Browsers require a user tap before audio can start.
const audio = $("birthdayAudio");
$("musicToggle").addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      $("musicToggle").setAttribute("aria-pressed", "true");
      $("musicToggle").innerHTML = "♫ <span>Music on</span>";
    } catch (error) {
      $("musicToggle").setAttribute("aria-pressed", "false");
      alert("Add a music.mp3 file to the website folder first, then tap Music again.");
    }
  } else {
    audio.pause();
    $("musicToggle").setAttribute("aria-pressed", "false");
    $("musicToggle").innerHTML = "♫ <span>Music</span>";
  }
});
