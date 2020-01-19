const studentsArr = [
    {
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 980,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,

    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
    },
    {
        name: 'Test',
        surname: 'Testname',
        ratingPoint: 1000,
        schoolPoint: 1400,
    },
];

// обработанный массив со студентами
let newStudentsArr = [];

class CreateStudent {
    constructor(student) {
        this.getStudentsProperties(student)
    }
    getStudentsProperties(student) {
        for (let key in student) {
            this[key] = student[key]
        }
    }
    // 2 Добавить в класс Student метод, который выдаст информацию о студенте
    getFormOfEducation() {
        // входит student, если его isSelfPayment - true, то он контрактник, иначе бютжетник
        return this.isSelfPayment ? 'контракт' : 'бютжет'
    }
    getFullInfo() {
        // передаем в строку name, surname, ratingPoint и метод getFormOfEducation()
        return `Я - ${this.name} ${this.surname},  рейтинговый балл - ${this.ratingPoint}, форма обучения - ${this.getFormOfEducation()}`
    }
    // 3 Создать метод который выдаст вам место в рейтинге студентов согласно успеваемости. Расчет ведем по свойству ratingPoint. То есть сортируете studentsArr по убыванию ratingPoint (от большего к меньшему). И ищете свой index + 1 (отсчет индексов с нуля потому что) в полученном массиве.
    getRankedPlace() {
        studentsArr.sort((a, b) => b.ratingPoint - a.ratingPoint);
        // console.log(studentsArr);
        let index = studentsArr.findIndex(item => item.ratingPoint == this.ratingPoint);
        return `Место в рейтинге студентов: ${index + 1}`
    }
}

const setAllCreatedStudentsByConstructor = (arrOfStudents) => {
    arrOfStudents.forEach(function (item) {
        let student = new CreateStudent(item);
        student.id = arrOfStudents.indexOf(item);
        newStudentsArr.push(student);
    })
    console.log(newStudentsArr);

    let studentsOnBudget = [];
    let onContract = [];

    newStudentsArr.forEach(function (item) {
        if (item.ratingPoint >= 800) {
            item.isSelfPayment = false;
            studentsOnBudget.push(item);
        }
        else {
            item.isSelfPayment = true;
            onContract.push(item);
        }
    });
    console.log(studentsOnBudget);

    studentsOnBudget.sort(function (a, b) {
        if (a.ratingPoint == b.ratingPoint) {
            if (a.schoolPoint > b.schoolPoint) {
                b.isSelfPayment = true;
                onContract.push(b);
                return -1;
            }
        }
        return b.ratingPoint - a.ratingPoint;
    });
    console.log(onContract);

    let fiveBudgetPlace = [];
    for (let i = 0; i < 5; i++) {
        fiveBudgetPlace.push(studentsOnBudget[i]);
    }
    console.log(fiveBudgetPlace);
}

console.log(setAllCreatedStudentsByConstructor(studentsArr))

const sudent = new CreateStudent(newStudentsArr[0]);
console.log(sudent);

console.log(sudent.getFullInfo());
console.log(sudent.getRankedPlace());

//  4 Создать новый класс Intern который будет населдовать Student (помним про super(params)). У класса Intern должно быть свойство companyName, значение которого вы передадите параметром и все свойства Student.

class Intern extends CreateStudent {
    constructor(student, companyName) {
        // все свойства student
        super(student)
        // свое свойство
        this.companyName = companyName,
        this.startYear,
        this.endYear
    }
    getFullInternInfo() {
        let studentInfo = '';
        for (let key in this) {
            studentInfo += key + ': ' + this[key] + ', '
        }
        return studentInfo
        // инфо о компании само добавилось
    }
    // 6. выдает
    get currentCourse() {
        return `текущий курс: ${this.course}, год поступления ${this.startYear}, год окончания ${this.endYear}`
    };
    // 6. передаем курс кот-ый хотим перезаписать в value
    set currentCourse(value) {
        // получили курс
        this.course = value
        // получили текущий год
        let todayNum = new Date().getFullYear(); //2020
        // максимальный курс - 4
        let coursCount = 4;
        // получили год поступления;
        if (this.course <= 4) {
            this.startYear = todayNum - this.course;
            this.endYear = this.startYear + coursCount;
        }
        else {
            console.log('Введите корректно курс!')
        }
    };
}

const intern = new Intern(newStudentsArr[1], 'Google');
console.log(intern);

// 5 Добавить классу Intern метод getFullInternInfo(), который выдаст полную инфу о студенте, как например ( ВО-ВТОРОМ ЗАДАНИИ ) и добавит к этой информации название компании.

console.log(intern.getFullInternInfo());

// 6 Создать в Intern геттер и сеттер с именем currentCourse (get currentCourse, set currentCourse). Когда вы используете геттер, то вы должны получить курс на котором вы учитесь в данный момент ( пробуем new Date().getYear() и смотрим на свойство course ). Когда вы используете сеттер, вы передаете число - курс который вы хотите перезаписать. Логика должна принять это число и сравнить с настоящим годом ( пробуем new Date().getYear() ). Потом данный сеттер должен записать startYear и endYear, а если их нет, то создать их согласно вашим вычислениям в сетере. Минимальный курс - 1, максимальный курс - 4

intern.currentCourse = 3;
console.log(intern.currentCourse);


let wer = [4, 6, 8, 11];
let result = wer.findIndex((element => element == 8));
//console.log(result); // 2





