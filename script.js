// Simple helper to get a random index from 0 to length-1
function getRandomIndex(length) {
  // length is a positive number
  const randomNumber = Math.random(); // 0 to <1
  const index = Math.floor(randomNumber * length);
  return index;
}

// -----------------------------
// 1) Mood suggestion (Home)
// -----------------------------
const moodForm = document.getElementById("mood-form");

if (moodForm) {
  const moodSelect = document.getElementById("mood");
  const moodResult = document.getElementById("mood-result");

  moodForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = moodSelect.value;
    let message = "";

    if (value === "great") {
      message = "Awesome! Keep following your healthy routine today.";
    } else if (value === "okay") {
      message = "Try a short walk and drink a glass of water.";
    } else if (value === "stressed") {
      message = "Close your eyes, take 5 deep breaths, and relax your shoulders.";
    } else if (value === "tired") {
      message = "Take a small break and avoid screens for some time.";
    } else {
      message = "Please choose how you feel first.";
    }

    moodResult.textContent = message;
  });
}

// -----------------------------
// 2) Appointment form (Book Appointment)
// -----------------------------
const appointmentForm = document.getElementById("appointment-form");

if (appointmentForm) {
  const appointmentMessage = document.getElementById("appointment-message");

  appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("patient-name").value.trim();
    const type = document.getElementById("appointment-type").value;
    const date = document.getElementById("appointment-date").value;
    const time = document.getElementById("appointment-time").value;

    if (name === "" || type === "" || date === "" || time === "") {
      appointmentMessage.textContent = "Please fill all required fields.";
      appointmentMessage.style.color = "red";
      return;
    }

    appointmentMessage.style.color = "green";
    appointmentMessage.textContent =
      "Thank you, " +
      name +
      ". Your " +
      type +
      " appointment request for " +
      date +
      " at " +
      time +
      " has been recorded (demo).";

    appointmentForm.reset();
  });
}

// -----------------------------
// 3) Random health tip (Health Tips page)
// -----------------------------
const randomTipBtn = document.getElementById("random-tip-btn");

if (randomTipBtn) {
  const randomTipOutput = document.getElementById("random-tip-output");

  const tips = [
    "Take a 5-minute break from screens every hour.",
    "Use stairs instead of the lift when possible.",
    "Avoid heavy meals right before sleeping.",
    "Stretch your neck and shoulders if you sit for long.",
    "Drink water regularly throughout the day.",
    "Try to add fruits or salads to one meal today."
  ];

  randomTipBtn.addEventListener("click", function () {
    const index = getRandomIndex(tips.length);
    randomTipOutput.textContent = tips[index];
  });
}

// -----------------------------
// 4) Mental wellness mood (Mental page)
// -----------------------------
const mentalMoodBtn = document.getElementById("mental-mood-btn");

if (mentalMoodBtn) {
  const mentalMoodSelect = document.getElementById("mental-mood");
  const mentalMoodOutput = document.getElementById("mental-mood-output");

  mentalMoodBtn.addEventListener("click", function () {
    const mood = mentalMoodSelect.value;
    let text = "";

    if (mood === "anxious") {
      text = "Try slow breathing, count 4 in, hold 4, and breathe out for 6.";
    } else if (mood === "sad") {
      text = "Call or text a friend you trust and share how you feel.";
    } else if (mood === "angry") {
      text = "Walk away from the situation, drink water, and give yourself 5 minutes.";
    } else if (mood === "calm") {
      text = "Great! Note one thing you are grateful for to keep this mood.";
    } else {
      text = "Select a mood first to get a small suggestion.";
    }

    mentalMoodOutput.textContent = text;
  });
}

// -----------------------------
// 5) Nearby hospital search (Nearby page)
// -----------------------------
const hospitalSearchBtn = document.getElementById("hospital-search-btn");

if (hospitalSearchBtn) {
  const cityInput = document.getElementById("city-input");
  const hospitalList = document.getElementById("hospital-list");

  const hospitals = [
    { name: "City Care Hospital", city: "sonipat", contact: "+91 99999 00001" },
    { name: "GreenLife Multi-Speciality", city: "delhi", contact: "+91 99999 00002" },
    { name: "Sunrise Health Center", city: "sonipat", contact: "+91 99999 00003" },
    { name: "Metro Heart Institute", city: "delhi", contact: "+91 99999 00004" }
  ];

  hospitalSearchBtn.addEventListener("click", function () {
    const query = cityInput.value.trim().toLowerCase();
    hospitalList.innerHTML = "";

    if (query === "") {
      hospitalList.innerHTML = "<li>Please enter a city name.</li>";
      return;
    }

    let found = false;

    for (let i = 0; i < hospitals.length; i++) {
      if (hospitals[i].city === query) {
        const li = document.createElement("li");
        li.textContent = hospitals[i].name + " – " + hospitals[i].contact;
        hospitalList.appendChild(li);
        found = true;
      }
    }

    if (!found) {
      hospitalList.innerHTML = "<li>No hospitals found in this demo for that city.</li>";
    }
  });
}

// -----------------------------
// 6) Yoga pose suggestion (Yoga page)
// -----------------------------
const yogaPoseBtn = document.getElementById("yoga-pose-btn");

if (yogaPoseBtn) {
  const yogaPoseOutput = document.getElementById("yoga-pose-output");

  const poses = [
    "Try Mountain Pose for 1–2 minutes and focus on slow breathing.",
    "Practice Child’s Pose for gentle relaxation of your back.",
    "Do Cat–Cow Stretch for 8–10 rounds to release tension.",
    "Hold Seated Forward Bend for a few breaths without forcing your body."
  ];

  yogaPoseBtn.addEventListener("click", function () {
    const index = getRandomIndex(poses.length);
    yogaPoseOutput.textContent = poses[index];
  });
}

// -----------------------------
// 7) Login / Sign Up modal (all pages)
// -----------------------------
const authModal = document.getElementById("auth-modal");
const loginOpenBtn = document.getElementById("login-open-btn");
const signupOpenBtn = document.getElementById("signup-open-btn");
const authCloseBtn = document.getElementById("auth-close-btn");
const authOverlay = document.querySelector(".auth-modal-overlay");
const authTabs = document.querySelectorAll(".auth-tab");
const authForms = document.querySelectorAll(".auth-form");

function setActiveTab(type) {
  for (let i = 0; i < authTabs.length; i++) {
    const tab = authTabs[i];
    const tabType = tab.getAttribute("data-tab");

    if (tabType === type) {
      tab.classList.add("auth-tab-active");
    } else {
      tab.classList.remove("auth-tab-active");
    }
  }

  for (let i = 0; i < authForms.length; i++) {
    const form = authForms[i];
    const isLoginForm = form.id === "login-form";

    if (type === "login" && isLoginForm) {
      form.classList.add("auth-form-active");
    } else if (type === "signup" && !isLoginForm) {
      form.classList.add("auth-form-active");
    } else {
      form.classList.remove("auth-form-active");
    }
  }
}

if (authModal && loginOpenBtn && signupOpenBtn) {
  loginOpenBtn.addEventListener("click", function () {
    authModal.classList.add("auth-modal-show");
    setActiveTab("login");
  });

  signupOpenBtn.addEventListener("click", function () {
    authModal.classList.add("auth-modal-show");
    setActiveTab("signup");
  });

  if (authCloseBtn) {
    authCloseBtn.addEventListener("click", function () {
      authModal.classList.remove("auth-modal-show");
    });
  }

  if (authOverlay) {
    authOverlay.addEventListener("click", function () {
      authModal.classList.remove("auth-modal-show");
    });
  }

  for (let i = 0; i < authTabs.length; i++) {
    authTabs[i].addEventListener("click", function () {
      const type = this.getAttribute("data-tab");
      setActiveTab(type);
    });
  }

  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Login demo – no real account is used.");
      authModal.classList.remove("auth-modal-show");
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Sign Up demo – data is not stored.");
      authModal.classList.remove("auth-modal-show");
    });
  }
}
