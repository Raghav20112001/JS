// Write a function to find the students with a GPA above a given value?

let students = [
    { id: 1, name: 'John Doe', major: ['Computer Science', 'English', 'Biology', 'Mathematics', 'Physics'], GPA: 9.4 },
    { id: 2, name: 'John Doe', major: ['Biology', 'Computer Science', 'Mathematics', 'Physics', 'English'], GPA: 8.6 },
    { id: 3, name: 'Mary Johnson', major: ['Mathematics', 'English', 'Biology', 'Physics', 'Computer Science'], GPA: 7.6 },
    { id: 4, name: 'James brown', major: ['English', 'Physics', 'Biology', 'Computer Science', 'Mathematics'], GPA: 8.4 },
    { id: 5, name: 'Lucas Walker', major: ['Physics', 'English', 'Biology', 'Computer Science', 'Mathematics'], GPA: 9.0 }
];

function findStudentsAboveGPA(students, Marks) {
    return students.filter(student => student.GPA > Marks);
}

const Marks = 9; 
const studentsAboveMarks = findStudentsAboveGPA(students, Marks);

console.log("Students with GPA above", Marks);
console.log(studentsAboveMarks);
