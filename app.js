// ===============================
// ANUSHIL HOME TUITION - APP.JS
// ===============================

const courses = [
  {
    className: "Class 1–5",
    subjects: "Foundation • Maths • English • EVS • Hindi",
    description: "Basic concepts aur strong foundation ke liye."
  },
  {
    className: "Class 6–8",
    subjects: "CBSE / ICSE • Maths • Science • English • SST",
    description: "School syllabus ke saath complete preparation."
  },
  {
    className: "Class 9–10",
    subjects: "Maths • Science • English • SST",
    description: "Board-focused preparation aur regular tests."
  },
  {
    className: "Class 11–12",
    subjects: "Science • Commerce • Arts",
    description: "Senior classes ke liye focused preparation."
  },
  {
    className: "Competitive Exams",
    subjects: "SSC • Railway • Banking • Other Exams",
    description: "Competitive exams ke liye practice aur guidance."
  }
];


// ===============================
// PAGE NAVIGATION
// ===============================

function page(sectionId) {

  const sections = document.querySelectorAll("main > section");

  sections.forEach(section => {
    section.style.display = "none";
    section.classList.remove("active");
  });

  const selected = document.getElementById(sectionId);

  if (selected) {
    selected.style.display = "block";
    selected.classList.add("active");
  }

  // Courses open hone par cards create karo
  if (sectionId === "courses") {
    showCourses();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ===============================
// COURSES
// ===============================

function showCourses() {

  const section = document.getElementById("courses");

  if (!section) return;

  section.innerHTML = `
    <div class="section-heading">
      <h2>📚 Our Courses</h2>
      <p>Apni class ke according course select karein</p>
    </div>

    <div class="course-grid">

      ${courses.map((course, index) => `
        
        <div class="course-card">

          <div class="course-icon">🎓</div>

          <h3>${course.className}</h3>

          <p class="course-subjects">
            ${course.subjects}
          </p>

          <p class="course-description">
            ${course.description}
          </p>

          <button onclick="courseDetails(${index})">
            View Course
          </button>

        </div>

      `).join("")}

    </div>
  `;
}


// ===============================
// COURSE DETAILS
// ===============================

function courseDetails(index) {

  const course = courses[index];

  alert(
    course.className +
    "\n\n" +
    course.subjects +
    "\n\n" +
    course.description +
    "\n\nAdmission ke liye Contact section par jayein."
  );
}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  page("home");

});
