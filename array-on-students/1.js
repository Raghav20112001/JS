//Write a function that finds the student with the highest GPA?

let students = [
    { id: 1, name: 'John Doe', major: 'Computer Science', subjects: ['English', 'Biology', 'Mathematics', 'Physics'], GPA: 9.4 },
    { id: 2, name: 'John Doe', major: 'Biology', subjects: ['Computer Science', 'Mathematics', 'Physics', 'English'], GPA: 8.6 },
    { id: 3, name: 'Mary Johnson', major: 'Mathematics', subjects: ['English', 'Biology', 'Physics', 'Computer Science'], GPA: 7.6 },
    { id: 4, name: 'James Brown', major: 'English', subjects: ['Physics', 'Biology', 'Computer Science', 'Mathematics'], GPA: 8.4 },
    { id: 5, name: 'Lucas Walker', major: 'Physics', subjects: ['English', 'Biology', 'Computer Science', 'Mathematics'], GPA: 9.0 }
];

function findTopStudent(students) {

    let topStudent = students[0];

    for (let i = 1; i < students.length; i++) {
        if (students[i].GPA > topStudent.GPA) {
            topStudent = students[i];
        }
    }
    return topStudent;
}

const topStudent = findTopStudent(students);
console.log(topStudent);