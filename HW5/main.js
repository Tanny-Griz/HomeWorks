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

let newStudentaArr = [];

function CreateStudent({ name, surname, ratingPoint, schoolPoint }) {
    this.id = newStudentaArr.length;
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    newStudentaArr.push(this);
}

const setAllCreatedStudentsByConstructor = (studentsArr) => {
    // массив студентов, созданный конструктором CreateStudent
    let arrOfStudents = [];

    studentsArr.forEach(function (item) {
        let student = new CreateStudent(item);
        arrOfStudents.push(student);
    })
    console.log(arrOfStudents);

    // студенты которые на бюджете
    let studentsOnBudget = [];
    // студенты которые на контракте
    let onContract = [];

    arrOfStudents.forEach(function (item) {
        if (item.ratingPoint >= 800) {
            item.isSelfPayment = false; // бюджетники
            studentsOnBudget.push(item);
        }
        else {
            item.isSelfPayment = true; // контрактники
            onContract.push(item);
        }
    });
    console.log(studentsOnBudget);

    // сортировка бюджетников по ratingPoint и schoolPoint
    studentsOnBudget.sort(function (a, b) {
        if (a.ratingPoint == b.ratingPoint) {
            if (a.schoolPoint > b.schoolPoint) {
                b.isSelfPayment = true; // того, у кого schoolPoint меньше - на контракт
                onContract.push(b);
                return -1;
            }
        }
        return b.ratingPoint - a.ratingPoint;
    });

    console.log(onContract);

    // массив из 5 учеников с самым высоким рейтингом
    let fiveBudgetPlace = [];

    for (let i = 0; i < 5; i++) {
        fiveBudgetPlace.push(studentsOnBudget[i]);
    }
    console.log(fiveBudgetPlace);

}

setAllCreatedStudentsByConstructor(studentsArr);


console.log("--------------------2---------------------");

// 2
function CustomString() {
    this.reverse = str => {
        let newStr = '';
        for (let i = str.length; i--;) {
            newStr += str[i];
        }
        console.log(newStr);
        return newStr;
        // 2 способ
        // let newStr = str.split('').reverse().join('');
        // console.log(newStr);
        // return newStr
    }

    this.ucFirst = str => {
        console.log(str.charAt(0).toUpperCase() + str.slice(1));
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    this.ucWords = str => {
        let newArr = str.split(' ');
        let newStr = [];
        for (let i = 0; i < newArr.length; i++) {
            let word = newArr[i][0].toUpperCase() + newArr[i].slice(1);
            newStr.push(word);
        }
        console.log(newStr.join(' '))
        return newStr.join(' ');
    }
}

const myString = new CustomString();

myString.reverse('qwerty');
myString.ucFirst('qwerty werty');
myString.ucWords('qwerty werty erty');

console.log("--------------------3---------------------");

function Validator() {
    this.checkIsEmail = str => {
        let a = str.indexOf("@");
        let dot = str.indexOf(".");
        if (str.length == 0) {
            console.log("Введите email");
            return false
        }
        else if (a < 1 || dot < 1) {
            console.log("Введите корректный email");
            return false
        }
        else {
            console.log('true');
            return true
        }
    };
    this.checkIsDomain = str => {
        if (str.includes('.com')) {
            console.log('true');
            return true
        }
        else {
            console.log('false');
            return false
        }
    }
    this.checkIsDate = str => {
        let arrDate = str.split('.');
        arrDate[1] -= 1;
        let date = new Date(arrDate[2], arrDate[1], arrDate[0]);
        if ((date.getFullYear() == arrDate[2]) && (date.getMonth() == arrDate[1]) && (date.getDate() == arrDate[0])) {
            console.log('true')
            return true;
        } else {
            console.log("Введена некорректная дата!");
            return false;
        }
    }
    this.checkIsPhone = str => {
        if (str.includes(+38)) {
            console.log(str.includes(+38));
            return true
        }
        else {
            console.log('false');
            return false
        }
    }
}

let validator = new Validator();

validator.checkIsEmail('vasya.pupkin@gmail.com');
validator.checkIsDomain('google.com');
validator.checkIsDate('30.11.2019');
validator.checkIsPhone('+38 (066) 937-99-92');
