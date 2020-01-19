
// 1 Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. Добавить геттер state который вернет шатат в котором живает наш кондидат. Информация о штате находится в свойстве address и это третья запись после запятой. свойства передаем с помощью Object.assign

class Condidate {
    constructor(condidate) {
        Object.assign(this, condidate);
    }
    get state() {
        return this.address.split(',').slice(2, 3).join();
    }
    get registeredDate(){
        let result = new Date(this.registered.split(' ')[0]);
        return result;
    }
    get allFriends() {
        let userFriends = this.friends.map(friend => {
            return friend.name.split(' ')[0];
        })
        return userFriends.join(', ');
    }
    get addressInfo() {
        let address = this.address.split(',');
        return {
            street: address[0],
            city: address[1],
            state: address[2],
            postalCode: address[3]
        }
    }
}

const condidate = new Condidate(condidateArr[6])
console.log(condidate)
console.log(condidate.state)

// 2 Форматировать у каждого экзепляра Condidate registered, так что бы оно было представленно в виде js данных Date. Что бы это получилось нам первоначально нужно отформатировать строку так, что бы удалитm из строки правую часть после пробела. Было "registered": "2017-04-08T05:13:17 -03:00" стало "registered": "2017-04-08T05:13:17". Подсказка split. new Date (condidate.registered)

console.log(condidate.registeredDate)

// 3 Создать функцию которая будет удалять людей из массива condidateArr по индексу, который мы передадим параметром. splice

function removeUser(arr, index) {
    let newArr = arr.splice(index, 1)
    console.log(arr)
    return newArr
}

console.log(removeUser(condidateArr, 3));

// 4 Создать геттер allFriends, котрый вернет строкой имена всех друзей, но без фамилии. Используем join.
console.log(condidate.allFriends)


// 5 Создать функцию которая вернет все ключи обьекта переданного параметром
function getAllKeys(param) {
    let userKeys = []
    for (let key in param) {
        userKeys.push(key)
    }
    return userKeys
}
console.log(getAllKeys(condidateArr[0]));

// 5.1
let userKeys = Object.keys(condidateArr[0]);
console.log(userKeys);


// 6 Создать функцию которая вернет все значения обьекта переданного параметром
let userValues = Object.values(condidateArr[0]);
console.log(userValues);

// 7 Создать геттер addressInfo, котрый вернет объектом информацию об адресе кондидата.
console.log(condidate.addressInfo);

// 8 Содать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата созданного через конструктор Condidate на основе данных из первого параметра в массив перед кондидатом у которого id равно тому что передали в параметре

function foo(condidate, id) {
    
}

foo(condidateArr[0], 6)