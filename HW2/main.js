//  1
const sayHi = (t) => {
    let name = prompt('Введите имя');
    if (t >= 6 && t < 12) {
        console.log(name + ' Доброе утро');
    } else if (t >= 12 && t < 18) {
        console.log(name + ' Добрый день');
    } else if (t >= 18 && t < 24) {
        console.log(name + ' Добрый вечер');
    } else if (t >= 00 || t == 24 && t < 6) {
        console.log(name + ' Доброй ночи');
    }
    else {
        console.log(name + ' Введите корректное число');
    }
}

sayHi(1);

// 2
let checkIsUserValid = (email, password) => {
    if (email == 'Qwerty@gmail.com' && password == 'Qwe123') {
        console.log('Доступ разрешен');
    }
    else {
        console.log('Доступ запрещен');
    }
}

checkIsUserValid('Qwerty@gmail.com', 'Qwe123');

// 2*
let inputEmail = document.querySelector('.input-email');
let inputPass = document.querySelector('.input-pass');
let p = document.querySelector('.out');
let btn = document.querySelector('.enter');

let checkIsUserValid_2 = () => {
    let email = inputEmail.value;
    let pass = inputPass.value;
    if (email == 'Qwerty@gmail.com' && pass == 'Qwe123') {
        p.innerHTML = 'Доступ разрешен';
    }
    else {
        p.innerHTML = 'Доступ запрещен';
    }
}

btn.onclick = checkIsUserValid_2;

// 3
let checkEvenOrOdd = (num) => {
    if (num % 2 == 0) {
        console.log("Четное");
    }
    else {
        console.log("Нечетное");
    }
};
checkEvenOrOdd(3);
checkEvenOrOdd(32);

//  4 
let flats = 3;
let floors = 9;
let sumFlats = flats * floors;

function getPorchAndFloor(num) {
    let et = num / flats;
    let pd;
    if (num < sumFlats) {
        et = Math.ceil(et);
        pd = 1;
        console.log('Квартира находится в ' + pd + ' подъезде');
        console.log('На ' + et + ' этаже');
    }
    else {
        pd = Math.ceil(et / floors);
        et = Math.trunc(((num-1) % sumFlats)/flats + 1);
        console.log('Квартира находится в ' + pd + ' подъезде');
        console.log('На ' + et + ' этаже');
    }
}

getPorchAndFloor(34);

// 5.1 Создать функцию, котороая проверяет трехзначное число на четность и если число четное, то находит сумму его цифр или произведение его цифр, если число нечетное. Запрещается использовать округление чисел (~~ или Math.floor(), Math.ceil() и т.д.)

const foo = (number) => {
    if (number % 2 == 0) {
        let result = number.toString().split('').reduce(function (a, b) {
            return +a + +b;
        });
        console.log(result);
    }
    else {
        let result = number.toString().split('').reduce(function (a, b) {
            return +a * +b;
        });
        console.log(result);
    }
}

foo(6022) // 6
foo(888) // 10


// 5.2
const foo2 = (num) => {
    if (num %2 == 0) {
        let num2 = num.toString();
        let result = 0;
        for (let i = 0; i < num2.length; i++) {
            result += Number(num2[i]);
        }
        console.log(result);
    }
    else {
        let num2 = num.toString();
        let result = 1;
        for (let i = 0; i < num2.length; i++) {
            result *= Number(num2[i]);
        }
        console.log(result);
    }
}

foo2(664);
foo2(333);