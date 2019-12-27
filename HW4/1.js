//№1

function Emploee(id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
};
const employeeObj = new Emploee(0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');
console.log(employeeObj);

//№2

Emploee.prototype.getFullName = function () {
    return this.surname + ' ' + this.name;
};
console.log(employeeObj.getFullName());

//№3

let createEmployesFromArr = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let emploee = new Emploee(arr[i].id, arr[i].name, arr[i].surname, arr[i].salary, arr[i].workExperience, arr[i].isPrivileges, arr[i].gender);
        result.push(emploee);
    }

    return result;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

//№4

const getFullNamesFromArr = (arr) => {
    let result = [];

    arr.forEach((value) => {
        result.push(value.getFullName());
    });

    return result;
};
console.log(getFullNamesFromArr(emplyeeConstructArr));

//№5

const getMiddleSalary = (arr) => {
    let sumSalary = 0;
    arr.forEach((value) => {
        sumSalary += value.salary;
    });

    return sumSalary / arr.length;
};

console.log(getMiddleSalary(emplyeeConstructArr));

//№6

function getRandomNumber(max) { //Создает функцию для получения рандомного числа
    return Math.floor(Math.random() * Math.floor(max)); //генерируем
};

function getRandomEmploee(arr) { //создаем функцию которая возвращает случайного работника
    const randomIndex = getRandomNumber(arr.length); //получаем случайное число. arr.length - верхняя граница (не включительно, поэтому просто arr.length а не arr.length-1)

    return arr[randomIndex]; //возвращем случайного работника
};

console.log(getRandomEmploee(emplyeeConstructArr)); //вызываем функцию и передаем нужный массив







