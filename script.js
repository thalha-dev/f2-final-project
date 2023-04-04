let students = [];
let idEditList = [];
let currentId = 0;

const form = document.querySelector(".form-container");
const studentName = form.elements[0];
const studentEmail = form.elements[1];
const studentGpa = form.elements[2];
const studentAge = form.elements[3];
const studentDegree = form.elements[4];
const submitButton = form.elements[5];
const tableBody = document.querySelector(".table-container table tbody");
const searchInput = document.getElementById("search-input");

const clearTable = () => {
  const children = tableBody.querySelectorAll("*");
  children.forEach((child) => {
    child.remove();
  });
};

const deleteRow = (rowToBeDeleted) => {
  let idToDelete = parseInt(
    rowToBeDeleted.querySelector("td:first-child").textContent
  );

  const filteredList = students.filter((item) => item.id != idToDelete);
  students = [...filteredList];
  clearTable();
  generateTable(students);
};

const populateDetails = (rowToBePopulated) => {
  let idToPopulate = parseInt(
    rowToBePopulated.querySelector("td:first-child").textContent
  );

  idEditList.push(idToPopulate);
  const selectedStudent = students.find((stu) => stu.id === idToPopulate);

  studentName.value = selectedStudent.name;
  studentEmail.value = selectedStudent.email;
  studentAge.value = selectedStudent.age;
  studentGpa.value = selectedStudent.gpa;
  studentDegree.value = selectedStudent.degree;

  const filteredList = students.filter((item) => item.id != idToPopulate);
  students = [...filteredList];
  submitButton.value = "Edit Student";
  submitButton.style.background = "black";
  submitButton.style.color = "white";
  submitButton.style.border = "1px solid #cfc8cf";
};

const generateTable = (studentDetails) => {
  studentDetails.sort((a, b) => a.id - b.id);
  studentDetails.forEach((individual) => {
    const row = tableBody.insertRow();
    const idCell = row.insertCell();
    const NameCell = row.insertCell();
    const EmailCell = row.insertCell();
    const AgeCell = row.insertCell();
    const GpaCell = row.insertCell();
    const DegreeCell = row.insertCell();

    idCell.textContent = individual.id;
    NameCell.textContent = individual.name;
    EmailCell.textContent = individual.email;
    AgeCell.textContent = individual.age;
    GpaCell.textContent = individual.gpa;
    DegreeCell.innerHTML = `
                <span>${individual.degree}</span>
                <span>
                  <button id="edit-button" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 23.7q-.825 0-1.413-.587T3 21.7v-14q0-.825.588-1.413T5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.588 1.413T19 23.7H5Zm7-9Zm4.175-8.425l1.425 1.4l-6.6 6.6V15.7h1.4l6.625-6.625l1.425 1.4l-6.625 6.625q-.275.275-.638.438t-.762.162H10q-.425 0-.713-.288T9 16.7v-2.425q0-.4.15-.763t.425-.637l6.6-6.6Zm4.275 4.2l-4.275-4.2l2.5-2.5q.6-.6 1.438-.6t1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8l-2.475 2.475Z"
                      />
                    </svg>
                  </button>
                  <button id="delete-button" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 21V6H4V4h5V3h6v1h5v2h-1v15H5Zm2-2h10V6H7v13Zm2-2h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                      />
                    </svg>
                  </button>
                </span>
`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let stuId;
  if (idEditList.length) {
    stuId = idEditList[0];
  } else {
    stuId = ++currentId;
  }
  const newStudent = {
    id: stuId,
    name: studentName.value,
    email: studentEmail.value,
    age: studentAge.value,
    gpa: studentGpa.value,
    degree: studentDegree.value,
  };

  students.push(newStudent);
  idEditList = [];
  submitButton.value = "Add Student";
  submitButton.style.background = "white";
  submitButton.style.color = "black";

  clearTable();
  generateTable(students);
  studentName.value = "";
  studentEmail.value = "";
  studentAge.value = "";
  studentGpa.value = "";
  studentDegree.value = "";
});

// for deleting records
tableBody.addEventListener("click", (e) => {
  if (e.target.tagName === "svg") {
    if (e.target.parentNode.id === "delete-button") {
      const rowToBeDeleted =
        e.target.parentNode.parentNode.parentNode.parentNode;
      deleteRow(rowToBeDeleted);
    }
  }
  if (e.target.tagName === "path") {
    if (e.target.parentNode.parentNode.id === "delete-button") {
      const rowToBeDeleted =
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      deleteRow(rowToBeDeleted);
    }
  }
  if (e.target.tagName === "BUTTON" && e.target.id === "delete-button") {
    const rowToBeDeleted = e.target.parentNode.parentNode.parentNode;
    deleteRow(rowToBeDeleted);
  }
});

// for editing details
tableBody.addEventListener("click", (e) => {
  if (e.target.tagName === "svg") {
    if (e.target.parentNode.id === "edit-button") {
      const rowToBePopulated =
        e.target.parentNode.parentNode.parentNode.parentNode;
      populateDetails(rowToBePopulated);
    }
  }
  if (e.target.tagName === "path") {
    if (e.target.parentNode.parentNode.id === "edit-button") {
      const rowToBePopulated =
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      populateDetails(rowToBePopulated);
    }
  }
  if (e.target.tagName === "BUTTON" && e.target.id === "edit-button") {
    const rowToBePopulated = e.target.parentNode.parentNode.parentNode;
    populateDetails(rowToBePopulated);
  }
});

// search feature
let timeoutId;
searchInput.addEventListener("keyup", (e) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    let searchWord = e.target.value.toLowerCase();
    const filteredStudents = students.filter((individual) => {
      if (
        individual.name.toLowerCase().includes(searchWord) ||
        individual.email.toLowerCase().includes(searchWord) ||
        individual.degree.toLowerCase().includes(searchWord)
      ) {
        return true;
      }
    });
    clearTable();
    generateTable(filteredStudents);
  }, 1000);
});
