let globalCount = 10;

function localScopeDemo() {
    let localCount = 5;
    console.log("Inside localScopeDemo - globalCount:", globalCount);
    console.log("Inside localScopeDemo - localCount:", localCount);
}

function modifyVariables() {
    globalCount = 25; 

    try {
        localCount = 50; 
    } catch (error) {
        console.log("Error caught inside modifyVariables:", error.message);
    }
}

localScopeDemo();
modifyVariables();
console.log("Global count after modification:", globalCount);

function Student(firstName, lastName, grade, major) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.major = major;

    this.getGreeting = function() {
        return "Hi, I'm " + this.firstName + " and I study " + this.major + ".";
    };
}

let student1 = new Student("Alex", "Mercer", 11, "Information Technology");
let student2 = new Student("Sarah", "Connor", 12, "Computer Science");
let student3 = new Student("David", "Martinez", 10, "Cybersecurity");

console.log(student1.getGreeting());
console.log(student2.lastName);
console.log(student3.grade);

let academyReport = {
    term: "Term 2",
    academicYear: 2026,
    institution: "Tech High School",
    coordinator: {
        name: "Mr. Evelyn",
        email: "evelyn@techhigh.edu",
        office: "Block C"
    },
    targetMetrics: [
        { subject: "Development", minimumPass: 60 },
        { subject: "Systems Architecture", minimumPass: 65 }
    ]
};

console.log(academyReport.coordinator.name);
console.log(academyReport.targetMetrics[0].subject);