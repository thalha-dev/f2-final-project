# Project Overview (100 Marks)

### Task

You are tasked with building a student management system using HTML, CSS, and JavaScript that allows users to create, read, update, and delete student profiles. You will be provided with an array of student objects, each containing the following properties: ID, name, age, grade, degree, and email.
Your task is to build a web page that displays the list of students, provides functionality to create, read, update, and delete student profiles, and allows users to search for specific students by name, email, or degree.

### Problem Statement

1. Display the list of students on the page in a visually appealing way, including all properties for each student in the form of a table as shown in the figma.

2. Provide a form that allows users to create new student profiles by entering their name, age, grade, degree, and email. On the click of add students the students object should be appended in the array.

3. Render the array of students in the form of a table as shown in the figma.

4. Provide an edit icon next to each student on the table that, when clicked, allows users to edit the properties of that student in a form. The form is the same as the one which you’ll use to add students, but as soon as the edit icon is clicked, make sure that the form’s inputs gets filled and the button changes from add student to edit student. On click of this update that particular object of the student with the new values of the input.

5. Provide a delete button next to each student on the list that, when clicked, deletes that student profile.

6. Provide a search box that allows users to filter the list of students by name,email, or degree.

7. Implement all functionality using only basic DOM manipulation techniques such as createElement(), appendChild(), removeChild(), innerHTML, etc. You should not use external libraries or advanced JavaScript features such as fetch(), promises, async/await, etc.

### The StudentsArray that you’ll create should look something like this -


`javaScript 

const students = [
  {
    ID: 1,
    name: "Alice",
    age: 21,
    grade: "A",
    degree: "Btech",
    email: "alice@example.com",
  },
  {
    ID: 2,
    name: "Bob",
    age: 22,
    grade: "B",
    degree: "MBA",
    email: "bob@example.com",
  },
  {
    ID: 3,
    name: "Charlie",
    age: 20,
    grade: "C",
    degree: "Arts",
    email: "charlie@example.com",
  },
];
` 
