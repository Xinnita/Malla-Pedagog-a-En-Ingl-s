// script.js completo con los 10 semestres

const courses = [
  // === SEMESTRE 1 ===
  { nombre: "Socioantropología Educacional", semestre: 1, prerrequisitos: [] },
  { nombre: "Construcción de la Identidad Profesional Docente", semestre: 1, prerrequisitos: [] },
  { nombre: "Idioma Inglés I", semestre: 1, prerrequisitos: [] },
  { nombre: "Audición y Pronunciación I", semestre: 1, prerrequisitos: [] },
  { nombre: "Gramática Aplicada I", semestre: 1, prerrequisitos: [] },
  { nombre: "Desarrollo de Habilidades del Pensamiento", semestre: 1, prerrequisitos: [] },

  // === SEMESTRE 2 ===
  { nombre: "Filosofía Educacional", semestre: 2, prerrequisitos: [] },
  { nombre: "Lectura y Escritura en Inglés", semestre: 2, prerrequisitos: ["Idioma Inglés I"] },
  { nombre: "Idioma Inglés II", semestre: 2, prerrequisitos: ["Idioma Inglés I"] },
  { nombre: "Audición y Pronunciación II", semestre: 2, prerrequisitos: ["Audición y Pronunciación I"] },
  { nombre: "Gramática Aplicada II", semestre: 2, prerrequisitos: ["Gramática Aplicada I"] },
  { nombre: "Comunicación Oral y Escrita en el Contexto Profesional", semestre: 2, prerrequisitos: [] },

  // === SEMESTRE 3 ===
  { nombre: "Enfoques Curriculares", semestre: 3, prerrequisitos: ["Construcción de la Identidad Profesional Docente"] },
  { nombre: "Psicología del Aprendizaje y del Desarrollo", semestre: 3, prerrequisitos: [] },
  { nombre: "Idioma Inglés III", semestre: 3, prerrequisitos: ["Idioma Inglés II"] },
  { nombre: "Audición y Pronunciación III", semestre: 3, prerrequisitos: ["Audición y Pronunciación II"] },
  { nombre: "Gramática Aplicada III", semestre: 3, prerrequisitos: ["Gramática Aplicada II"] },
  { nombre: "Estrategias Psicoeducativas para la Diversidad", semestre: 3, prerrequisitos: [] },

  // === SEMESTRE 4 ===
  { nombre: "Gestión Educacional", semestre: 4, prerrequisitos: ["Construcción de la Identidad Profesional Docente"] },
  { nombre: "Expresión Corporal y Proyección de la voz", semestre: 4, prerrequisitos: ["Idioma Inglés III"] },
  { nombre: "Idioma Inglés IV", semestre: 4, prerrequisitos: ["Idioma Inglés III"] },
  { nombre: "Cultura y Literatura I", semestre: 4, prerrequisitos: ["Idioma Inglés II"] },
  { nombre: "Pedagogía de la Identidad de Genero", semestre: 4, prerrequisitos: [] },
  { nombre: "Teoría de la Educación", semestre: 4, prerrequisitos: [] },

  // === SEMESTRE 5 ===
  { nombre: "Teoría Evaluativa", semestre: 5, prerrequisitos: ["Enfoques Curriculares"] },
  { nombre: "Didáctica de la Especialidad I", semestre: 5, prerrequisitos: ["Idioma Inglés IV"] },
  { nombre: "Idioma Inglés V", semestre: 5, prerrequisitos: ["Idioma Inglés IV"] },
  { nombre: "Cultura y Literatura en Inglés II", semestre: 5, prerrequisitos: ["Cultura y Literatura I"] },
  { nombre: "Practica Inicial", semestre: 5, prerrequisitos: ["Idioma Inglés IV"] },
  { nombre: "Epistemología y Paradigmas", semestre: 5, prerrequisitos: ["Teoría de la Educación"] },

  // === SEMESTRE 6 ===
  { nombre: "Diseño de Procesos Evaluativos en Inglés", semestre: 6, prerrequisitos: ["Teoría Evaluativa"] },
  { nombre: "Diseño de Procesos de Enseñanza y Aprendizaje", semestre: 6, prerrequisitos: ["Enfoques Curriculares"] },
  { nombre: "Idioma Inglés VI", semestre: 6, prerrequisitos: ["Idioma Inglés V"] },
  { nombre: "Cultura y Literatura en Inglés", semestre: 6, prerrequisitos: ["Cultura y Literatura en Inglés II"] },
  { nombre: "Didáctica de la Especialización II", semestre: 6, prerrequisitos: ["Didáctica de la Especialidad I"] },
  { nombre: "Análisis de Proyectos de Investigación Educativa", semestre: 6, prerrequisitos: ["Epistemología y Paradigmas"] },

  // === SEMESTRE 7 ===
  { nombre: "Liderazgo Pedagógico", semestre: 7, prerrequisitos: ["Gestión Educacional"] },
  { nombre: "Didáctica de la especialidad III", semestre: 7, prerrequisitos: ["Didáctica de la Especialización II"] },
  { nombre: "Discurso Oral y Escrito I", semestre: 7, prerrequisitos: ["Idioma Inglés VI"] },
  { nombre: "Gramática Inglesa I", semestre: 7, prerrequisitos: ["Idioma Inglés VI"] },
  { nombre: "Practica Intermedia", semestre: 7, prerrequisitos: ["Idioma Inglés VI"] },
  { nombre: "Metodología de la Investigación Educacional", semestre: 7, prerrequisitos: ["Análisis de Proyectos de Investigación Educativa"] },

  // === SEMESTRE 8 ===
  { nombre: "Orientación Educacional", semestre: 8, prerrequisitos: ["Diseño de Procesos Evaluativos en Inglés", "Psicología del Aprendizaje y del Desarrollo", "Diseño de Procesos de Enseñanza y Aprendizaje"] },
  { nombre: "Recursos Digitales para el Aprendizaje", semestre: 8, prerrequisitos: ["Discurso Oral y Escrito I"] },
  { nombre: "Discurso Oral y Escrito II", semestre: 8, prerrequisitos: ["Discurso Oral y Escrito I"] },
  { nombre: "Gramática Inglesa II", semestre: 8, prerrequisitos: ["Gramática Inglesa I"] },
  { nombre: "Redacción Académica en Inglés", semestre: 8, prerrequisitos: ["Discurso Oral y Escrito I"] },
  { nombre: "Seminario de Licenciatura Educacional", semestre: 8, prerrequisitos: ["Metodología de la Investigación Educacional"] },

  // === SEMESTRE 9 ===
  { nombre: "Habilidades Integradas en Inglés", semestre: 9, prerrequisitos: ["Discurso Oral y Escrito II"] },
  { nombre: "Taller Pedagógico en Inglés", semestre: 9, prerrequisitos: ["Discurso Oral y Escrito I"] },
  { nombre: "Trabajo de Integración Didáctico", semestre: 9, prerrequisitos: ["Discurso Oral y Escrito II"] },
  { nombre: "Pensamiento no Critico y Resolución de Problemas", semestre: 9, prerrequisitos: [] },
  { nombre: "Práctica Profesional", semestre: 9, prerrequisitos: [] },

  // === SEMESTRE 10 ===
  { nombre: "Educación y Formación Ciudadana", semestre: 10, prerrequisitos: [] }
];

// Estado de cursos aprobados
let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses') || '[]');

function isUnlocked(course) {
  return course.prerrequisitos.every(req => approvedCourses.includes(req));
}

function toggleCourse(name) {
  if (approvedCourses.includes(name)) {
    approvedCourses = approvedCourses.filter(c => c !== name);
  } else {
    approvedCourses.push(name);
  }
  localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
  render();
}

function render() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  const maxSemester = Math.max(...courses.map(c => c.semestre));

  for (let s = 1; s <= maxSemester; s++) {
    const semesterDiv = document.createElement("div");
    semesterDiv.className = "semester";

    const title = document.createElement("div");
    title.className = "semester-title";
    title.textContent = `Semestre ${s}`;
    semesterDiv.appendChild(title);

    const courseContainer = document.createElement("div");
    courseContainer.className = "courses";

    courses.filter(c => c.semestre === s).forEach(course => {
      const div = document.createElement("div");
      div.className = "course";
      div.textContent = course.nombre;

      const isApproved = approvedCourses.includes(course.nombre);
      const unlocked = isUnlocked(course);

      if (isApproved) {
        div.classList.add("approved");
      } else if (!unlocked) {
        div.classList.add("locked");
      }

      if (unlocked || isApproved) {
        div.addEventListener("click", () => toggleCourse(course.nombre));
      }

      courseContainer.appendChild(div);
    });

    semesterDiv.appendChild(courseContainer);
    container.appendChild(semesterDiv);
  }
}

render();
