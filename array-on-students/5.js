//Write a function to calculate the overall average GPA?

let students = [
    { id: 1, name: 'John Doe', major: ['Computer Science', 'English', 'Biology', 'Mathematics', 'Physics'], GPA: 9.4 },
    { id: 2, name: 'John Doe', major: ['Biology', 'Computer Science', 'Mathematics', 'Physics', 'English'], GPA: 8.6 },
    { id: 3, name: 'Mary Johnson', major: ['Mathematics', 'English', 'Biology', 'Physics', 'Computer Science'], GPA: 7.6 },
    { id: 4, name: 'James brown', major: ['English', 'Physics', 'Biology', 'Computer Science', 'Mathematics'], GPA: 8.4 },
    { id: 5, name: 'Lucas Walker', major: ['Physics', 'English', 'Biology', 'Computer Science', 'Mathematics'], GPA: 9.0 }
];

function calculateAvgGPA(students) {

    let totalGPA = students.reduce((sum, student) => sum + student.GPA, 0);
    let averageGPA = totalGPA / students.length;
    return averageGPA;
}


const AvgGPA = calculateAvgGPA(students);
console.log("Overall average GPA:", AvgGPA);
