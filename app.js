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
// STUDY MATERIAL
// ===============================

const materials = [
  {
    title: "Mathematics Notes",
    type: "PDF Notes",
    icon: "📐",
    description: "Chapter-wise Mathematics notes aur practice material."
  },
  {
    title: "Science Notes",
    type: "PDF Notes",
    icon: "🔬",
    description: "Important concepts, definitions aur revision notes."
  },
  {
    title: "English Grammar",
    type: "Study Material",
    icon: "📖",
    description: "Grammar rules, examples aur practice questions."
  },
  {
    title: "Hindi Notes",
    type: "Study Material",
    icon: "📚",
    description: "Hindi grammar aur chapter revision material."
  },
  {
    title: "Previous Year Papers",
    type: "Question Papers",
    icon: "📝",
    description: "Previous year questions ki practice."
  },
  {
    title: "Practice Worksheets",
    type: "Worksheets",
    icon: "📄",
    description: "Daily practice ke liye worksheets."
  },
    {
    title: "Class 5 Mathematics PDF",
    type: "PDF Notes",
    icon: "📘",
    description: "Class 5 Mathematics chapter-wise notes and practice questions."
  },
  {
  title: "Class 6 NCERT Geography",
  type: "NCERT Book",
  icon: "🌍",
 description: "Class 6 NCERT Geography chapter-wise study material.",
link: "NCERT%20BOOK/Class%206/Geography/"
},
  {
    title: "Class 6 Mathematics PDF",
    type: "PDF Notes",
    icon: "📘",
    description: "Class 6 Mathematics complete study material."
  },
  {
    title: "Class 7 Science PDF",
    type: "PDF Notes",
    icon: "🔬",
    description: "Class 7 Science important concepts and revision notes."
  },
  {
    title: "Class 8 Science PDF",
    type: "PDF Notes",
    icon: "🔬",
    description: "Class 8 Science chapter-wise study material."
  },
  {
    title: "Class 9 Mathematics PDF",
    type: "PDF Notes",
    icon: "📐",
    description: "Class 9 Mathematics notes and practice material."
  },
  {
    title: "Class 10 Mathematics PDF",
    type: "PDF Notes",
    icon: "📐",
    description: "Class 10 Mathematics board preparation notes."
  },
  {
    title: "Class 10 Science PDF",
    type: "PDF Notes",
    icon: "🧪",
    description: "Class 10 Science complete revision material."
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

  if (sectionId === "courses") {
    showCourses();
  }

  if (sectionId === "material") {
    showMaterials();
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
// MATERIAL
// ===============================

function showMaterials() {

  const section = document.getElementById("material");

  if (!section) return;

  section.innerHTML = `
    <div class="section-heading">
      <h2>📚 Study Material</h2>
      <p>Notes, PDFs aur practice material</p>
    </div>

    <div class="material-grid">

      ${materials.map((material, index) => `

        <div class="material-card">

          <div class="material-icon">
            ${material.icon}
          </div>

          <div>
            <span class="material-type">
              ${material.type}
            </span>

            <h3>${material.title}</h3>

            <p>${material.description}</p>

            <button onclick="openMaterial(${index})">
              📖 Open Material
            </button>
          </div>

        </div>

      `).join("")}

    </div>
  `;
}


function openMaterial(index) {

  const material = materials[index];

  if (material.link) {
    window.open(material.link, "_blank");
  } else {
    alert(
      material.title +
      "\n\n" +
      material.description +
      "\n\nPDF link abhi add nahi kiya gaya."
    );
  }

}
}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  page("home");
});
