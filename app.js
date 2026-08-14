function page(name) {
  const sections = [
    "home",
    "courses",
    "material",
    "test",
    "schedule",
    "profile",
    "admin",
    "contact"
  ];

  sections.forEach(function(id) {
    const section = document.getElementById(id);

    if (section) {
      section.style.display = "none";
    }
  });

  const selected = document.getElementById(name);

  if (selected) {
    selected.style.display = "block";
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}


/* Website open hone par Home dikhe */
document.addEventListener("DOMContentLoaded", function() {
  page("home");
});


/* Online Test */
function submitQuiz() {
  let score = 0;

  const answers = {
    q1: "60",
    q2: "delhi",
    q3: "gun",
    q4: "10",
    q5: "prashn"
  };

  Object.keys(answers).forEach(function(question) {
    const selected = document.querySelector(
      'input[name="' + question + '"]:checked'
    );

    if (selected && selected.value === answers[question]) {
      score++;
    }
  });

  alert(
    "Test Complete!\n\n" +
    "Your Score: " +
    score +
    " / 5"
  );
}


/* Student Profile */
function saveProfile() {
  const name = document.getElementById("studentName");
  const mobile = document.getElementById("studentMobile");
  const className = document.getElementById("studentClass");

  if (!name || !mobile || !className) {
    alert("Profile form नहीं मिला।");
    return;
  }

  const profile = {
    name: name.value,
    mobile: mobile.value,
    className: className.value
  };

  localStorage.setItem(
    "studentProfile",
    JSON.stringify(profile)
  );

  alert("Student Profile Save हो गया ✅");
}


/* Saved Profile Load */
function loadProfile() {
  const saved = localStorage.getItem("studentProfile");

  if (!saved) return;

  const profile = JSON.parse(saved);

  const name = document.getElementById("studentName");
  const mobile = document.getElementById("studentMobile");
  const className = document.getElementById("studentClass");

  if (name) name.value = profile.name || "";
  if (mobile) mobile.value = profile.mobile || "";
  if (className) className.value = profile.className || "";
}


/* Notice */
function publishNotice() {
  const input = document.getElementById("noticeInput");

  if (!input || input.value.trim() === "") {
    alert("पहले Notice लिखो।");
    return;
  }

  localStorage.setItem(
    "latestNotice",
    input.value.trim()
  );

  alert("Notice Publish हो गया ✅");

  input.value = "";
}


/* Notice Load */
function loadNotice() {
  const notice = localStorage.getItem("latestNotice");

  if (!notice) return;

  const box = document.getElementById("latestNotice");

  if (box) {
    box.textContent = notice;
  }
}


/* Local Data Reset */
function resetData() {
  const confirmReset = confirm(
    "क्या आप सभी saved local data delete करना चाहते हैं?"
  );

  if (!confirmReset) return;

  localStorage.clear();

  alert("Data Reset हो गया ✅");

  location.reload();
}


/* Page load */
document.addEventListener("DOMContentLoaded", function() {
  loadProfile();
  loadNotice();
});
