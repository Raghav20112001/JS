//write a function that returns an object where each key is a major, and the value is the number of students in that major?

let students = [
    { id: 1, name: 'John Doe', major: ['Computer Science', 'English', 'Biology', 'Mathematics', 'Physics'], GPA: 9.4 },
    { id: 2, name: 'John Doe', major: ['Biology', 'Computer Science', 'Mathematics', 'Physics', 'English'], GPA: 8.6 },
    { id: 3, name: 'Mary Johnson', major: ['Mathematics', 'English', 'Biology', 'Physics', 'Computer Science'], GPA: 7.6 },
    { id: 4, name: 'James brown', major: ['English', 'Physics', 'Biology', 'Computer Science', 'Mathematics'], GPA: 8.4 },
    { id: 5, name: 'Lucas Walker', major: ['Physics', 'English', 'Biology', 'Computer Science', 'Mathematics'], GPA: 9.0 }
];

function countStudentsByMajor(students) {
    let majorCounts = {};

    students.forEach(student => {
        student.major.forEach(major => {
            if (majorCounts[major]) {
                majorCounts[major]++;
            } else {
                majorCounts[major] = 1;
            }
        });
    });

    return majorCounts;
}

const studentsByMajor = countStudentsByMajor(students);
console.log("Number of students by major:");
console.log(studentsByMajor);
