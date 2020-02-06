window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}
// ДУБЛИКАТ МАССИВА
let newArrPizzaList = [];

// ДУБЛИКАТ МАССИВА С КОМПОНЕНТАМИ
let newCompositionList = [...compositionList];

// МОДАЛЬНОЕ ОКНО
const pizzaCardContainer = document.querySelector('.pizza-info');
const card = document.querySelector('.pizza-info__card');

// ЗАКРЫТИЕ МОДАЛКИ
function hendlerClose(e) {
    // считываем класс у эл-та
    const elemClassName = e.target.className;
    // если он = pizza-info'
    if (
        elemClassName === 'pizza-info' ||
        elemClassName === 'pizza-info__hide' ||
        elemClassName === 'pizza-info__close'
    ) {
        // прячем и на оборот
        this.style.display = 'none';
        body.classList.remove('open-modal');
    }
}
pizzaCardContainer.addEventListener('click', hendlerClose);


//РЕНДЕР МОДАЛЬНОЙ КАРТЫ
const renderPizzaCard = (pizza) => {
    const template = `
            <div class="pizza-info__header">
                <a href="#close" title="Close" class="pizza-info__close">X</a>
                <h3>${pizza.name}</h3>
            </div>
            <div class="row pizza-info__body">
                <div class="col-6">
                    <span>Состав: </span>
                    <div class="pizza-info__composition">
                        <ul>
                            ${
        pizza.composition.map(composition => {
            return `<li class="d-inline-flex">${composition}, </li>`
        }).join('')
        }
                        </ul>
                    </div>
                    <p>Каллории: ${pizza.caloricity}</p>
                    <p class="pizza-info__price">Цена: ${pizza.price} грн.</p>
                </div>
                <div class="col-6">
                    <img src="img/${pizza.img}" alt="icon">
                </div>
            </div>
            <div class="pizza-info__footer">
                <button class="pizza-info__hide">Hide</button>
            </div>
    `
    card.innerHTML = template;
}
// ---------------------------------------------------


// СОЗДАЕМ МОДАЛЬНОЕ ОКНО С СОЗДАНИЕМ СВОЕЙ ПИЦЦЫ
const createPizza = document.getElementById('create-pizza');
const modalCreate = document.getElementById('modal-content-create');
createPizza.addEventListener('click', hendlerClose);


// МАССИВ ИЗ АЙДИШНИКОВ и нового свойство isChecked
let createPizzaIds = newCompositionList.map(item => {
    return {
        id: item.id,
        isChecked: false
    }
})


// МОДАЛЬНОЕ ОКНО CREATE
const renderMyPizzaCreateModal = () => {
    const pizzaInfoCard = cElem('div', 'pizza-info__card');

    const pizzaInfoHeader = cElem('div', 'pizza-info__header');

    const aClose = cElem('a', 'pizza-info__close');
    aClose.innerText = 'X';
    aClose.href = '#'

    let h3 = cElem('h3');
    h3.innerText = 'Имя пиццы';

    // Create input name
    const inputPizzaName = cElem('input', 'form-control');
    inputPizzaName.placeholder = 'Введите название';

    const pizzaInfoBody = cElem('div', 'pizza-info__body');
    pizzaInfoBody.innerHTML = `
        <div class="col-12 mb-3">
            <span>Добавить компоненты: </span>
        </div>
    `

    const pizzaInfoComposition = cElem('div', 'col-12 pizza-info__composition');

    const formCheck = cElem('div', 'holder-form');

    // Create checkboxes
    /// Добавили все состовляющие в виде инпутов и лейблов
    for (let comp of newCompositionList) {
        const checkboxItem = cElem('div', 'checkbox-item');
        // input
        const nameInput = cElem('input', 'input');
        nameInput.id = `exampleCheck${comp.id}`;
        nameInput.type = 'checkbox';
        const p = document.createElement('p');
        p.innerText = comp.name;

        // label
        const labelForNameInput = cElem('label', 'label');
        labelForNameInput.htmlFor = `exampleCheck${comp.id}`;
        // labelForNameInput.innerHTML = `<p>${}</p>`;


        nameInput.onchange = function () {
            // массив айди и isChecked
            createPizzaIds = createPizzaIds.map(elem => {
                // 
                if (elem.id === comp.id) {
                    return {
                        id: elem.id,
                        isChecked: this.checked
                    }
                }
                return elem
            })

            // console.log(createPizzaIds);
            // console.log({ ...comp });
        }

        labelForNameInput.append(nameInput);
        labelForNameInput.appendChild(p);
        checkboxItem.append(labelForNameInput);
        // checkboxItem.append(nameInput);
        formCheck.appendChild(checkboxItem);
    }

    // Create info elems
    const p1 = document.createElement('p');
    p1.id = 'price-info'
    p1.innerText = `Каллории: ${'ccal'}`;

    const p2 = cElem('p', 'pizza-info__price');
    p2.innerText = `Цена: ${'price'} грн.`;

    const pizzaInfoFooter = cElem('div', 'col-12 d-flex justify-content-between pizza-info__footer');

    const pizzaBtnCreate = cElem('button', 'btn pizza-info__Create');
    pizzaBtnCreate.innerText = 'Create';


    // НОВУЮ ФУНКЦИЮ Pizza
    function Pizza(name, arrOfIds) {
        this.id = newArrPizzaList.length + 1;
        this.name = inputPizzaName.value || 'My Pizza';
        this.caloricity = 100;
        this.price = 50;
        this.composition = [];
        this.img = "19.png";

        for (let id of arrOfIds) {
            for (let comp of newCompositionList) {
                if (id == comp.id) {
                    this.composition.push(comp.name);
                    this.price += comp.price;
                    this.caloricity += comp.caloricity;
                }
            }
        }
        this.isCustom = true;
        newCompositionList.push(this);
    }

    pizzaBtnCreate.onclick = function () {
        // в массив Ids, если isChecked == true, добавим эти id
        const ids = createPizzaIds.filter(el => el.isChecked).map(el => el.id)
        const MyPizza = new Pizza(inputPizzaName.value, ids);
        newArrPizzaList.push(MyPizza);

        // залили наш массив с новой пиццей в локалстор
        localStorage.setItem('pizzas', JSON.stringify(newArrPizzaList));

        // отрисовали
        renderHolderPizzasList(newArrPizzaList);
        createPizza.style.display = 'none';
    }


    const pizzaInfoHide = cElem('button', 'btn pizza-info__hide');
    pizzaInfoHide.innerText = 'Hide';

    pizzaInfoCard.appendChild(pizzaInfoHeader);
    pizzaInfoHeader.appendChild(aClose);
    pizzaInfoHeader.appendChild(h3);
    pizzaInfoHeader.appendChild(inputPizzaName);
    pizzaInfoCard.appendChild(pizzaInfoBody);
    pizzaInfoBody.appendChild(pizzaInfoComposition);
    pizzaInfoComposition.appendChild(formCheck);

    pizzaInfoComposition.appendChild(p2);
    pizzaInfoComposition.appendChild(p1);

    pizzaInfoFooter.appendChild(pizzaBtnCreate);
    pizzaInfoFooter.appendChild(pizzaInfoHide);
    pizzaInfoCard.appendChild(pizzaInfoFooter);

    return pizzaInfoCard
}

// РЕНДЕР МОДАЛЬНОГО ОКНА
const renderСompositionList = (arrayOfСomposition) => {
    const createPizzaBox = document.getElementById('create-pizza');
    createPizzaBox.innerHTML = '';
    createPizzaBox.style.display = 'flex';

    createPizzaBox.append(renderMyPizzaCreateModal())
}

const createPizzaBtn = document.getElementById('create-pizza-btn');
// запуск рендера при нажатии кнопки
createPizzaBtn.onclick = function() {
    body.classList.add('open-modal');
    renderСompositionList(newCompositionList);
}
//-------------------------------------------------------



//---------------------------------------------------------
const body = document.querySelector('body');



// СОЗДАЕМ КАРТОЧКУ ТОВАРА
const renderCard = (pizza) => {
    const holdCard = cElem('div', 'hold-card');

    const card = cElem('div', 'card');
    card.id = `pizza${pizza.id}`;
    // ПОКАЗ МОДАЛЬНОГО ОКНА
    card.onclick = function () {
        renderPizzaCard(pizza);
        pizzaCardContainer.style.display = 'flex';
        body.classList.add('open-modal');
    }
    holdCard.appendChild(card);
    // img
    const visual = cElem('div', 'visual');
    visual.innerHTML = `<img src="img/${pizza.img}" alt="icon">`;
    card.appendChild(visual);
    // В ИЗБРАННОЕ
    const buttonFavorite = cElem('button', 'addToFavor');
    buttonFavorite.innerHTML = `<span class="heart">&#10084;</span>`;
    buttonFavorite.onclick = function (e) {
        e.stopPropagation();
        pizza.isFavourite = true;
    }
    card.appendChild(buttonFavorite);
    // text 
    const text = cElem('div', 'text');
    // h3
    const pizzaName = document.createElement('h3');
    pizzaName.innerHTML = pizza.name;
    text.appendChild(pizzaName);
    // p composition
    const composition = cElem('ul', 'pizza-card__composition');
    composition.innerHTML = 'Состав: ' + pizza.composition.map(c => `<li>${c},</li>`).join(' ');
    text.appendChild(composition);
    // p caloricity
    const caloricity = cElem('p', 'pizza-card__caloricity');
    caloricity.innerText = `Ккал: ${pizza.caloricity}`;
    text.appendChild(caloricity);
    // p price
    const price = cElem('p', 'pizza-card__price');
    price.innerText = `Цена: ${pizza.price} грн.`;
    text.appendChild(price);
    // button
    const buttonOrder = cElem('button', 'pizza-card__button')
    buttonOrder.innerText = 'Заказать';

    buttonOrder.onclick = function (e) {
        e.stopPropagation();
        Cart.setPizza(pizza.id);
        // пушим в массив для корзины
        arrOfPizzaBasket.push(pizza);

        // отправляем в локал заказанные пицы
        localStorage.setItem('pizzaBasket', JSON.stringify(arrOfPizzaBasket));
        console.log(arrOfPizzaBasket);
    }
    text.appendChild(buttonOrder);
    card.appendChild(text);

    return holdCard;
}
// МАССИВ ДЛЯ КОРЗИНЫ ЛОКАЛ
const arrOfPizzaBasket = [];

// -----------------------------------------------------

// ОТРИСОВКА НА СТРАНИЦУ КАРТОЧКИ
// создаем копию массива


// куда отрисуем
const mainElement = document.querySelector('.holder-pizzas-list');

// РЕНДЕР ПИЦЦ НА СТРАНИЦУ
const renderHolderPizzasList = (arrayOfPizza) => {
    mainElement.innerHTML = '';

    for (let pizza of arrayOfPizza) {
        // каждая пицца залетает в renderCard(pizza)
        const card = renderCard(pizza);
        mainElement.appendChild(card);
    }
}

// РЕНДЕР С ЛОКАЛСТОРЭДЖ ЛИБО наш массив
const getArrFronmStorage = () => {
    // достаем из локала
    const arr = localStorage.getItem('pizzas')
    arrParse = JSON.parse(arr)
    // записываем в наш массив либо с локала, либо возвращаем наш
    newArrPizzaList = arrParse || [...pizzaList]
    return newArrPizzaList
}
renderHolderPizzasList(getArrFronmStorage());


// СЕЛЕКТ по возрастанию, по убыванию
const select = document.getElementById('select');

select.onchange = function () {
    newArrPizzaList.sort((a, b) => {
        if (a.price < b.price) return this.value === '1' ? -1 : 1
        if (a.price > b.price) return this.value === '1' ? 1 : -1
        if (a.price === b.price) return 0
    })
    renderHolderPizzasList(newArrPizzaList);
}


// ЖИВОЙ ПОИСК
const input = document.getElementById('inputFind');

input.addEventListener('input', function (e) {
    let newArr = newArrPizzaList.filter(pizza => {
        let eTargetValue = e.target.value.toLowerCase();
        // если совпадения есть в именах или составе
        let pizzaNameIncludes = pizza.name.toLowerCase().includes(eTargetValue);
        let pizzaCompositionIncludes = pizza.composition.join(' ').toLowerCase().includes(eTargetValue);
        // вернуть по пиццу с таким именем либо составом (избежать дублирования)
        return pizzaNameIncludes || pizzaCompositionIncludes
    });
    newArr = newArr.map(pizza => {
        let composition = pizza.composition.map(comp => {
            if (e.target.value.length && comp.includes(e.target.value)) {
                return `<span class="pink">${comp}</span>`;
            }
            return comp
        })
        return { ...pizza, composition }
    })
    renderHolderPizzasList(newArr);
})
// ----------------------------------------


// ФИЛЬТР по каллориям или цене (От - До)
let inputFrom = document.getElementById('inputFrom');
let inputTo = document.getElementById('inputTo');
let btnFind = document.getElementById('btn-find');
const selectFilter = document.getElementById('select-filter');

let sortPizzasByCaloricity = () => {
    const valueOfFilterFrom = inputFrom.value
    const valueOfFilterTo = inputTo.value
    const newArrCaloricity = newArrPizzaList.filter((pizza) => {
        if (pizza.caloricity > valueOfFilterFrom && pizza.caloricity < valueOfFilterTo) {
            return true
        }
        return false
    })
    renderHolderPizzasList(newArrCaloricity);
}

let sortPizzasByPrice = () => {
    const valueOfFilterFrom = inputFrom.value
    const valueOfFilterTo = inputTo.value
    const newArrPrice = newArrPizzaList.filter((pizza) => {
        if (pizza.price > valueOfFilterFrom && pizza.price < valueOfFilterTo) {
            return true
        }
        return false
    })
    renderHolderPizzasList(newArrPrice);
}

// кнопка ПРИМЕНИТЬ ФИЛЬТР
btnFind.onclick = function () {
    if (selectFilter.value == '1') {
        sortPizzasByCaloricity();
    }
    if (selectFilter.value == '2') {
        sortPizzasByPrice();
    }
}
//------------------------------------------------------


// КНОПКА СБРОСА ФИЛЬТРОВ
let btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', resetFilterValue);

function resetFilterValue() {
    inputFrom.value = null;
    inputTo.value = null;
    renderHolderPizzasList(newArrPizzaList);
}


// ДОБАВИТЬ В ИЗБРАННОЕ
const addToFavor = document.getElementById('addToFavor');


// БАННЕР / СЛАЙДЕР
const renderSlide = (pizza) => {
    const holderSlider = cElem('div', 'row holder-slider-item text-center');
    // img
    const slideImg = cElem('div', 'col-sm-6 col-md-4 slide-img');
    const img = cElem('img', 'simg');
    img.alt = 'icon';
    img.src = 'img/' + pizza.img;
    // const action = cElem('div', 'action');

    // text
    const slideText = cElem('div', 'col-sm-6 col-md-8 slide-text');

    slideText.innerHTML = `
                        <h3>${pizza.name}</h3>
                        <ul class="d-flex flex-wrap pizza-card__composition">Состав: ${pizza.composition.map(c => ` <li>${c}, </li>`).join(' ')} </ul>
                        <p class="pizza-card__caloricity">
                            Каллорийность: ${pizza.caloricity}
                        </p>
                        <p class="pizza-card__price">
                            Цена: ${pizza.price} грн.
                        </p>
                        `;

    const buttonOrder = cElem('button', 'pizza-card__button px-3');
    buttonOrder.innerText = 'Заказать';

    // заказ на слайдере
    buttonOrder.onclick = function() {
        localStorage.setItem('pizzaBasket', JSON.stringify(arrOfPizzaBasket));

        Cart.setPizza(pizza.id);
        // пушим в массив для корзины
        arrOfPizzaBasket.push(pizza);

        // отправляем в локал заказанные пицы
        localStorage.setItem('pizzaBasket', JSON.stringify(arrOfPizzaBasket));
    }

    const action = cElem('div', 'action');
    action.innerHTML = '<img src="img/act.png" alt="action"/>';
    slideText.appendChild(buttonOrder);
    slideText.appendChild(action);
    slideImg.appendChild(img);
    // slideText.appendChild(action);
    holderSlider.appendChild(slideImg);
    holderSlider.appendChild(slideText);

    return holderSlider
}


// ПИЦЦЫ из предложения дня
let indexOfName = 0;
const pizzaOfTheDay = newArrPizzaList.filter(pizza => {
    if (pizza.priceOfTheDay == true) {
        return true
    }
})

// отрисовка в БАННЕР Акционных пиц
const renderSlideContainer = (pizza) => {
    const sliderContainer = document.querySelector('.slider');
    sliderContainer.innerHTML = '';
    if (pizza.priceOfTheDay == true) {
        const slide = renderSlide(pizza);
        sliderContainer.appendChild(slide);
    }
}
renderSlideContainer(pizzaOfTheDay[indexOfName]); // отрисовываем первую, без интервала

// setInterval(() => {
//     // если индекс = последнему (концу) массива, то индексу снова присваиваем 0, иначе +1
//     indexOfName = indexOfName === pizzaOfTheDay.length - 1 ? 0 : indexOfName + 1
//     renderSlideContainer(pizzaOfTheDay[indexOfName]); // через каждые 2 сек отрысов по очереди 
// }, 3000);


// ---------------------
// посылаем в локал обьеккт
const setToLocalStorage = () => {
    const obj = {
        // который содержит массив, сумму и кол-во
        cartArr: Cart.cartArr,
        totalPrice: Cart.totalPrice,
        totalCount: Cart.totalCount,
    }
    // const objLS = JSON.parse(localStorage.getItem('cart') || []);
    // console.log(objLS)
    // objLS.push(obj)
    localStorage.setItem('cart', JSON.stringify(obj))
}

class Cart {
    static cartArr = newArrPizzaList.map(pizza => {
        return {
            id: pizza.id,
            img: pizza.img,
            name: pizza.name,
            count: 0,
            price: pizza.price,
            totalPrice: 0,
        }
    })

    static totalPrice = 0 // общая цена

    static totalCount = 0 // кол-во всего пицц

    // сюда передаем id 
    static setPizza(idOfCurrentPizza) {
        const pizzaModel = newArrPizzaList.find(p => p.id === idOfCurrentPizza);

        for (let pizza of Cart.cartArr){
            if (pizza.id === idOfCurrentPizza){
                pizza.count += 1;
                pizza.img = pizzaModel.img;
                pizza.price = pizzaModel.price;
                pizza.totalPrice += pizzaModel.price;
                Cart.totalPrice += pizzaModel.price;
                Cart.totalCount++;
                // console.log(Cart.cartArr);
                // const objLS = JSON.parse(localStorage.getItem('cart') || {});
                // objLS += pizza;
                // localStorage.setItem('cart', JSON.stringify(objLS));
                setToLocalStorage();
                
                break;
            }
        }
    }
}
