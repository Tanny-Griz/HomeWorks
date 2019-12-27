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


// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива employeeArr
// 1

function Employee({ id, name, surname, salary, workExperience, isPrivileges, gender }) {
    this.id = id || null;
    this.name = name || 'No name';
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}

const employee_a = new Employee({
    id: 11,
    name: 'Alina',
    surname: 'Akil',
    salary: 1000,
    workExperience: 10,
    isPrivileges: true,
    gender: 'famale',
});

console.log(employee_a);

// Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
// 2

console.log('-------------------------2------------------------------');

Employee.prototype.getFullName = function () {
    return this.surname + " " + this.name;
}

console.log(employee_a.getFullName());

// Создать новый массив employeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя employeeConstructArr.
// 3

console.log('-------------------------3------------------------------');

let createEmployesFromArr = (arr) => {
    let myArr = [];
    arr.forEach(function (item) {
        myArr.push(item);
    });
    console.log(myArr);
    return myArr;
};

const employeeConstructArr = createEmployesFromArr(employeeArr);

// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в employeeConstructArr;
// 4

console.log('-------------------------4------------------------------');

const getFullNamesFromArr = (arr) => {
    let myArrNames = [];
    arr.forEach(function (item) {
        myArrNames.push(item.name + " " + item.surname);
    });
    console.log(myArrNames);
}

getFullNamesFromArr(employeeConstructArr);

// Создать функцию которая вернет среднее значение зарплаты всех employee
// 5

console.log('-------------------------5------------------------------');

const getMiddleSalary = (arr) => {
    let sum = 0;
    arr.forEach(function (item) {
        sum += item.salary;
    });
    console.log(employeeArr.length);
    console.log(sum / (employeeArr.length));
    return sum / (employeeArr.length);
}

getMiddleSalary(employeeConstructArr); /// 2388.181818181818

// Создать функцию которая выберет рандомного работника из массива employeeConstrctArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random;
// 6

console.log('-------------------------6------------------------------');

const getRandomNumber = (maxRandom) => { 
    let min = 0;
    const randomNumber = Math.floor(min + Math.random() * (maxRandom + 1 - min));
    if (randomNumber > maxRandom) {
        getRandomNumber(maxRandom);
    } else {
        return randomNumber;
    }
}

const getRandomEmployee = (arr) => { 
    const randomIndex = getRandomNumber(arr.length - 1);
    return arr[randomIndex];
}

getRandomEmployee(employeeConstructArr);

console.log(getRandomEmployee(employeeConstructArr));
















