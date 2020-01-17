// 1 Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором,- суммирует переданый параметр с тем, что передали первый раз и тд
function getParam() {
    let p = '';
    return (param) => {
        if (p.length) {
            p = +p + +param
            return p
        }
        p += param // 3 добавл в строку
        return p
    }
}

let counter = getParam();
console.log(counter(3)); // 3
console.log(counter(5)); // 8
console.log(counter(228)); // 236

// 2 Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится.
console.log('---------2---------');

function getArr() {
    let arr = [];
    return (param) => {
        if (param == undefined) {
            return arr = [];
        }
        arr.push(param)
        return arr
    }
}

let getUpdatedArr = getArr();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr('Anna'));
console.log(getUpdatedArr({ age: 22 }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(10));
console.log(getUpdatedArr(20));

// 3 Создать класс Room. В нем есть свойство, это kidsArr - массив с объектами типа Kid.
console.log('----------3--------');

const kidsArr = [
    {
        name: 'Kostya',
        age: 10,
        gender: 'male',
    },
    {
        name: 'Vasya',
        age: 9,
        gender: 'male',
    },
    {
        name: 'Masha',
        age: 9,
        gender: 'female',
    },
    {
        name: 'Mitya',
        age: 8,
        gender: 'male',
    },
];

class Kid {
    constructor({ name, age, gender }) {
        this.id = ++Kid.nextId // генерируем id
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    static nextId = 0
}

let newKidsArr = kidsArr.map((item) => {
    item = new Kid(item);
     return item
});

console.log(newKidsArr)
console.log(newKidsArr[1])

class Room {
    constructor(newKidsArr, roomNumber) {
        this.newKidsArr = newKidsArr;
        this.roomNumber = roomNumber;
    }
    get kidsCount() {
        return this.newKidsArr.length
    }
    get femaleCount() {
        let result = newKidsArr.reduce((sum, item) => {
            if (item.gender === 'female') {
                return ++sum
            }
            return sum
        }, 0)
        return result
    }
    get maleCount() {
        let result = newKidsArr.reduce((sum, item) => {
            if (item.gender === 'male') {
                return ++sum
            }
            return sum
        }, 0)
        return result
    }
    get lastKid() {
        let lastKidObj = {}
        for (let key in newKidsArr) {
            lastKidObj = newKidsArr[key]
        }
        return lastKidObj
    }
    set lastKid(kid) {
        kid = new Kid(kid);
        newKidsArr.push(kid);
    }
}

const room = new Room(newKidsArr, 101)

// const room = new Room(kidsArr);
console.log('--------кол-во детей в комнате-------')
console.log(room.kidsCount); // 4
console.log('--------кол-во девочек в комнате-------')
console.log(room.femaleCount); // 1
console.log('--------кол-во мальчиков в комнате-------')
console.log(room.maleCount); // 3
console.log('--------последний ребенок-------')
console.log(room.lastKid); // Kid {id: 4, name: "Mitya", age: 8, gender: "male"}
room.lastKid = { name: 'Kolya', age: 9, gender: 'male' }; // 
console.log('--------последний ребенок после добавления-------')
console.log(room.lastKid); // Kid {id: 5, name: "Kolya", age: 9, gender: "male"}
console.log('--------кол-во детей в комнате-------')
console.log(room.kidsCount); // 5

// 4 Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'

let timerFunc = () => {
    let time;
    return () => {
        if (!time) {
            time = new Date().getTime();
            return 'Enabled';
        }
        else {
            let olderTime = time;
            let temp = new Date().getTime();
            time = temp;
            return temp - olderTime;
        }
    }
};

let getTime = timerFunc();
console.log(getTime())


