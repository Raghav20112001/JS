//Given a major, write a function to return the average GPA of all students with that major?

let students = [
    { id: 1, name: 'John Doe', major: 'Computer Science', subjects: ['English', 'Biology', 'Mathematics', 'Physics'], GPA: 9.4 },
    { id: 2, name: 'John Doe', major: 'Biology', subjects: ['Computer Science', 'Mathematics', 'Physics', 'English'], GPA: 8.6 },
    { id: 3, name: 'Mary Johnson', major: 'Mathematics', subjects: ['English', 'Biology', 'Physics', 'Computer Science'], GPA: 7.6 },
    { id: 4, name: 'James Brown', major: 'English', subjects: ['Physics', 'Biology', 'Computer Science', 'Mathematics'], GPA: 8.4 },
    { id: 5, name: 'Lucas Walker', major: 'Physics', subjects: ['English', 'Biology', 'Computer Science', 'Mathematics'], GPA: 9.0 }
];

function averageGPAByMajor(students, major) {
    const filteredStudents = students.filter(student => student.major === major);

    if (filteredStudents.length === 0) {
        return 0; 
    }

    const totalGPA = filteredStudents.reduce((acc, student) => acc + student.GPA, 0);
    const averageGPA = totalGPA / filteredStudents.length;
    return averageGPA;
}

//const major = 'Mathematics';
/*const major = 'Computer Science';  tried something but showed error
const major = 'English';
const major = 'Biology';
const major = 'Physics';*/
//const averageGPA = averageGPAByMajor(students, major);
//console.log(`Average GPA of ${major} students: ${averageGPA}`);
console.log(averageGPAByMajor(students, 'Computer Science'));
console.log(averageGPAByMajor(students, 'Biology')); 
console.log(averageGPAByMajor(students, 'Mathematics'));
console.log(averageGPAByMajor(students, 'English')); 
console.log(averageGPAByMajor(students, 'Physics'));