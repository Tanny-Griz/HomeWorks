//  1

let num = 55;
const student = "Ivan";
let isMale = true;
let age = null;
let pets = {
    name: "Charly",
    age: "2 month",
    isInoculations: true,
    isDiseases: false,
    isParasites: false
};

//  2

let employee = {
    name: "Anna",
    age: 26,
    position: "Designer",
    salary: "$500",
    isMarried: true,
}

//  3

let showEmployee = () => {
    console.log(employee);
};

showEmployee();

//  4

employee.isFamale = true;

for (let key in employee) {
    console.log(key + ": " + employee[key])
}

//  5

const arr = [
    {
        name: "Anna",
        age: 29,
        position: "Qa",
        salary: "$900",
        isMarried: true,
    },
    {
        name: "Alina",
        age: 28,
        position: "Designer",
        salary: "$900",
        isMarried: false,
    },
    {
        name: "Andrey",
        age: 33,
        position: "Developer",
        salary: "$1000",
        isMarried: true,
    },
    {
        name: "Nic",
        age: 31,
        position: "Hr",
        salary: "$600",
        isMarried: false,
    },
    {
        name: "Jhon",
        age: 28,
        position: "Seo",
        salary: "$800",
        isMarried: true,
    },
];

let getEmplyeeByIndex = (index) => {
    console.log(arr[index]);
}

getEmplyeeByIndex(4);






