window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}

const initialCartObj = () => {
    // cartArr, totalPrice, totalCount
    const cartArr = newArrPizzaList.map(item => {
        return {
            id: item.id,
            name: item.name,
            totalCount: 0,
            totalPrice: 0
        }
    })
    return {
        cartArr,
        totalPrice: 0,
        totalCount: 0,
    }
}


// достаем из стореджа обьект
const cartObj = JSON.parse(localStorage.getItem('cart')) || initialCartObj();
// берем из него массив cartArr
const { cartArr } = cartObj;


const sumItem = document.querySelector('.sumItem');
const sumUah = document.querySelector('.sumUah');
// const itAll = document.querySelectorAll('.inputValue');


class CartComponent {
    static renderBasketCart(pizza) {
        const item = cElem('div', 'col item d-flex justify-content-between align-items-center mx-3');
        const itemImg = cElem('div', 'item-img');
        itemImg.id = pizza.id;
        const img = document.createElement('img');
        img.src = 'img/' + pizza.img;
        img.alt = 'pizza';
        itemImg.appendChild(img);

        const itemName = cElem('div', 'item-name');
        const h4 = document.createElement('h4');
        h4.innerHTML = `Пицца <br>"${pizza.name}"`
        itemName.appendChild(h4);

        const amount = cElem('div', 'amount');
        const input = cElem('input', 'inputValue');
        input.type = 'number';
        input.value = pizza.count;

        const itemPrice = cElem('div', 'item-price');
        const result = cElem('input', 'result price');
        result.readOnly = true;
        result.value = pizza.totalPrice;

        const pValut = cElem('p', 'valut price');
        pValut.innerText = 'грн.';

        // ДОБАВЛЕНИЕ / УДАЛЕНИЕ ПИЦЦ
        input.oninput = function () {
            if (input.value > 0) {
                // исходную цену пиццы * значение инпута 
                const sum = pizza.price * input.value;
                // записываем в итоговую цену
                result.value = sum;
                // нашли пиццу, на которой произошел онинпут
                const pizzaInCart = cartArr.find(p => p.id === pizza.id);
                // меняем ей свойства счетчика = введенному инпуту
                pizzaInCart.count = +input.value;
                // цену
                pizzaInCart.totalPrice = sum;
                // 
                cartObj.totalCount = cartArr.reduce((a,b) => {
                    return a + b.count 
                }, 0)
                cartObj.totalPrice = cartArr.reduce((a,b) => {
                    return a + b.totalPrice
                }, 0)
                // рендерим
                CartComponent.renderTotalInfo()
                // перезаписываем в локал
                localStorage.setItem('cart', JSON.stringify(cartObj))
            }
            if (input.value == 0) {
                result.value = 0;
            }
        };

        CartComponent.renderTotalInfo()

        amount.appendChild(input)
        itemPrice.appendChild(result);
        itemPrice.appendChild(pValut);
        item.appendChild(itemImg);
        item.appendChild(itemName);
        item.appendChild(amount);
        item.appendChild(itemPrice);
        return item
    }

    static renderTotalInfo() {
        sumItem.innerText = cartObj.totalCount
        sumUah.innerText = cartObj.totalPrice
    }

    // ОТРИСОВКА НА СТРАНИЦУ
    static renderHolderItem() {
        let { cartArr, totalPrice, totalCount } = cartObj;
        const pizzaElement = document.querySelector('.holder-item');

        pizzaElement.innerHTML = '';
        if (cartArr) {
            cartArr.filter(item => item.count).map(item => {
                const card = CartComponent.renderBasketCart(item);
                pizzaElement.appendChild(card);
            })
        }
        console.log(cartArr)
    }
}

CartComponent.renderHolderItem()
