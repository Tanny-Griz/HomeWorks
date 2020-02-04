window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}



const sumItem = document.querySelector('.sumItem');
const sumUah = document.querySelector('.sumUah');
const itAll = document.querySelectorAll('.inputValue');


// ОТРИСОВКА КАРТ В КОРЗИНЕ
const renderBasketCart = (pizza) => {
    const item = cElem('div', 'row item');
    const itemImg = cElem('div', 'col-sm-6 col-md-4 p-1 item-img');
    itemImg.id = pizza.id;
    const img = document.createElement('img');
    img.src = 'img/' + pizza.img;
    img.alt = 'pizza';
    itemImg.appendChild(img);

    const itemName = cElem('div', 'col-sm-6 col-md-4 item-name p-1 align-self-center');
    const h4 = document.createElement('h4');
    h4.innerHTML = `Пицца <br>"${pizza.name}"`
    itemName.appendChild(h4);

    const amount = cElem('div', 'col-sm-4 col-md-2 amount p-1 align-self-center');
    const input = cElem('input', 'inputValue');
    input.type = 'number';
    input.value = '1';

    const itemPrice = cElem('div', 'col-sm-8 col-md-2 item-price p-1 align-self-center');
    const result = cElem('p', 'result price');
    const pValut = cElem('p', 'valut price');
    result.innerText = pizza.price;
    pValut.innerText = 'грн.';

    // ДОБАВЛЕНИЕ / УДАЛЕНИЕ ПИЦЦ
    input.oninput = function () {
        if (input.value > 0) {
            const sum = +input.value * pizza.price;
            result.innerText = sum;
        }
        if (input.value == 0) {
            result.innerText = 0;
        }
    };
    amount.appendChild(input)

    itemPrice.appendChild(result);
    itemPrice.appendChild(pValut);
    item.appendChild(itemImg);
    item.appendChild(itemName);
    item.appendChild(amount);
    item.appendChild(itemPrice);


    // ВЫВОД ОБЩЕГО КОЛ-ВА ТОВАРОВ И СУММЫ
    sumItem.innerText = pizzaBasketFromLS.length;
    // console.log(arrParse.length);
    sumUah.innerText = pizza.price;
    function sumPrice() {
        let sum = 0;
        for (let i = 0; i < pizzaBasketFromLS.length; i++) {
            sum += pizzaBasketFromLS[i].price;
        }
        sumUah.innerText = sum;
        console.log(sum)
    }
    sumPrice()

    return item
}

const pizzaElement = document.querySelector('.holder-item');


// МАССИВ ОБЬЕКТОВ ИЗ КОРЗИНЫ ЛОКАЛА
//перебрали массив корзины из локала
let pizzaBasketFromLS = localStorage.getItem('pizzaBasket');
pizzaBasketFromLS = JSON.parse(pizzaBasketFromLS);
console.log(pizzaBasketFromLS);


// ОТРИСОВКА НА СТРАНИЦУ
const renderHolderItem = (arr) => {
    pizzaElement.innerHTML = '';
    for (let pizza of arr) {
        const card = renderBasketCart(pizza);
        pizzaElement.appendChild(card);
    }
}
renderHolderItem(pizzaBasketFromLS);




