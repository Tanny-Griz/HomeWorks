/* 1 Есть переменная let count = 2; Есть 2 setTimout:

setTimout(() => { count = count + 1; }, 2000)
setTimout(() => { count = count * 2; }, 3000)
Создать функцию которая в console.log выведет значение count и переменная count будет равна 5. Выполнить через then и async/await. Нельзя выолнять ни одной арифметической или логической операции, они уже лежат в setTimout-ах  */

// async + await
let count = 2;
async function foo() {
    // получаем промис <resolved>: 4
    let countFour = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count = count * 2);
        }, 3000)
    });
    
    let result = await countFour; // 4
    // получаем промис <resolved>: 5
    let countFive = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(count = count + 1);
        }, 2000)
    });
    result = await countFive // 5
    console.log(result)
}
foo()

// 2 .then
let count2 = 3
function bar() {
    function countSix() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(count2 = count2 * 2);
            }, 3000)
        });
    }

    function countSeven() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(count2 = count2 + 1);
            }, 2000)
        });
    }

    function countTen() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(count2 = count2 + 3);
            }, 1000)
        });
    }
    countSix().then(res1 => countSeven().then(res2 => countTen().then(res3 => console.log('10:', res3))))
}
bar()

/* 3 создать функцию которая выведет 50 книг в массиве. В функцию getBooks мы параметром n можем передавать число, после функция выведет нам 10 книг. Саму функцию getBooks не меняем.

let promise = fetch(url, [options])
*/

const getBooks = async (n = 1) => {
    let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting=${n}`);
    books = await books.json()
    return books.items
}

// 1
getBooks(1)
    .then(books => getBooks(2)
    .then(books2 => getBooks(3)
    .then(books3 => getBooks(4)
    .then(books4 => getBooks(5)
    .then(books5 => {
        console.log([...books, ...books2, ...books3, ...books4, ...books5])
    })))))

// 2
let promises = [getBooks(1), getBooks(2), getBooks(3), getBooks(4) ,getBooks(5)]

Promise.all(promises).then(resultsArr => {
    console.log(resultsArr);
});

// 3
async function getBooks2() {
    let resultsArr = []
    const getBooks = async (n = 1) => {
        let books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting=${n}`);
        books = await books.json()
        return books.items
    }

    for (let i = 1; i <= 5; i++) {
        await getBooks(i).then(val => result = resultsArr.concat(val))
    }

    console.log(resultsArr)
}