const employeeArr = [
    {
        id: 0,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 1,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 3,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 6,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 10,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

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
const emplyeeConstructArr = createEmployesFromArr(employeeArr);
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