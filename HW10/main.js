// 1 Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. Добавить геттер state который вернет шатат в котором живает наш кондидат. Информация о штате находится в свойстве address и это третья запись после запятой. свойства передаем с помощью Object.assign

class Condidate {
    constructor(condidate) {
        Object.assign(this, condidate);
    }
    get state() {
        return this.address.split(',')[2]
    }
}

const condidate = new Condidate(condidateArr[4])
console.log(condidate)
console.log(condidate.state)

// 2 Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. Если фирмы повторяются в массиве, то удалить дубликаты.

const companyArray = condidateArr.map((cond) => {
    return cond.company
})

// new Set оставляет только уникальные значения, [... спредоператор -> в массив ]
const uniqCompanyArray = [...new Set(companyArray)];

// .from()
const uniqCompanyArray2 = Array.from(new Set(companyArray));

// filter + indexOf
const uniqCompanyArray3 = companyArray.filter((cond, index) => index === companyArray.indexOf(cond));

// reduce 
// uniq = [], который собираем, cond - текущий элемент
const uniqCompanyArray4 = companyArray.reduce((uniq, cond) => {
    return uniq.includes(cond) ? uniq : [...uniq, cond]
}, [])

console.log(uniqCompanyArray);
console.log(uniqCompanyArray2);
console.log(uniqCompanyArray3);
console.log(uniqCompanyArray4);

// 3 Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре. Помним что сначала желательно отформатировать дату как в предыдущем дз.
//3.1
function getUsersByYear(year) {
    let registeredArr = []
    condidateArr.filter((cond) => {
        // отфильтровали по нужной дате
        let result = new Date(cond.registered.split(' ')[0]);
        if (result.getFullYear() === year) {
            registeredArr.push(cond._id)
        }
    })
    return registeredArr
}
console.log(getUsersByYear(2017))

//3.2
function getUsersByYear2(year) {
    let registeredArr = condidateArr.reduce((sum, cond)=> {
        let result = new Date(cond.registered.split(' ')[0]);
        if (result.getFullYear() === year) {
            sum.push(cond._id)
        }
        return sum
    }, [])
    return registeredArr
}
console.log(getUsersByYear2(2017))

// 4 Создать функцию которая вернет массив с кондидатами, отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.

function getCondidatesByUnreadMsg(num) {
    let msgArr = []
    condidateArr.map((cond) => {
        let result = cond.greeting.split('!')[1].trim().split(' ')[2];
        if (+result === num) {
            msgArr.push(cond)
        }
    })
    return msgArr
}

console.log(getCondidatesByUnreadMsg(9))

// 5 Создать функцию которая вернет массив по свойству gender.

function getCondidatesByGender(gender) {
    let condidatesByGenderArr = condidateArr.filter(cond => cond.gender === gender)
    return condidatesByGenderArr
}
console.log(getCondidatesByGender('male'))

// 6 Создать функцию reduce, join самому.

let arrNum = [1, 5, 3, 8, 5]

// join 
Array.prototype.myJoin = function(separator) {
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (!String(this[i])) {
            return 'empty'
        }
        str += this[i] + separator
    }
    return str
}

let resJoin = arrNum.myJoin('+ ')
console.log(resJoin)


// reduce
Array.prototype.myReduce = function(cb, arg) {
    for (let index in this) {
        arg = cb(arg, this[index])
    }
    return arg
}

let resReduce = arrNum.myReduce((total, curr) => {
    return total + curr
}, 0)
console.log(resReduce)








// filter
Array.prototype.myFilter = function (cb) {
    let a = []
    for (let index in this) {
        const callBackResult = cb(this[index], index);
        if (callBackResult === true) {
            a.push(this[index])
        }
    }
    return a
}

let resFilter = arrNum.myFilter((num) => {
    return num > 3
})
console.log(resFilter) // [5, 8, 4]

// map 
Array.prototype.myMap = function (cb) {
    let a = [];
    for (let index in this) {
        let result = cb(this[index], index)
        a.push(result)
    }
    return a
}
