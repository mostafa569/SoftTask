const express = require('express');
const app = express();

const students = [
  { name: 'John Doe', age: 20, major: 'Computer Science' },
  { name: 'Jane Smith', age: 22, major: 'Mathematics' },
  { name: 'Bob Johnson', age: 21, major: 'English' }
];

app.get('/students', (req, res) => {
  let studentList = '<ul>';

  students.forEach(student => {
    const { name, age, major } = student;
    studentList += `<li>${name}, ${age}, ${major}</li>`;
  });

  studentList += '</ul>';

  res.send(studentList);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
