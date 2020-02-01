window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}

// МОДАЛЬНОЕ ОКНО
const pizzaCardContainer = document.querySelector('.pizza-info');
const card = document.querySelector('.pizza-info__card');

// закрытие модалки
function hendlerClose(e) {
    // считываем класс у эл-та
    const elemClassName = e.target.className;
    console.log(elemClassName)
    // если он = pizza-info'
    if (
        elemClassName === 'pizza-info' ||
        elemClassName === 'pizza-info__hide' ||
        elemClassName === 'pizza-info__close'
    ) {
        // прячем и на оборот
        this.style.display = 'none'
    }
}
pizzaCardContainer.addEventListener('click', hendlerClose)
// рендер модалки карты
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

// ДУБЛИКАТ МАССИВА С КОМПОНЕНТАМИ
let newCompositionList = [...compositionList];


// МАССИВ ИЗ АЙДИШНИКОВ и нового свойство isChecked
let createPizzaIds = newCompositionList.map(item => {
    return { 
        id: item.id, 
        isChecked: false 
    }
})
console.log(createPizzaIds);


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
        <div class="col-12 mb-2">
            <span>Добавить компоненты: </span>
        </div>
    `

    const pizzaInfoComposition = cElem('div', 'col-12 pizza-info__composition');

    const formCheck = cElem('div', 'form-check');

    //Create checkboxes
    /// Добавили все состовляющие в виде инпутов и лейблов
    for (let comp of newCompositionList) {
        const checkboxItem = cElem('div', 'checkbox-item');
        // input
        const nameInput = cElem('input', 'input');
        nameInput.id = `exampleCheck${comp.id}`;
        nameInput.type = 'checkbox';
        // label
        const labelForNameInput = cElem('label', 'label');
        labelForNameInput.htmlFor = `exampleCheck${comp.id}`;
        labelForNameInput.innerHTML = `<p>${comp.name}</p>`;

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

    pizzaBtnCreate.onclick = function () {
        const nameOfPizza = inputPizzaName.value;
        // в массив Ids, если isChecked == true, добавим эти id

        const ids = createPizzaIds.filter(el => el.isChecked).map(el => el.id)

        function Pizza (name, arrOfIds) {
            this.id = pizzaList.length + 1;
            this.name = nameOfPizza || 'My Pizza';
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
            pizzaList.push(this);
        }

        const MyPizza = new Pizza(nameOfPizza, ids);
        console.log(MyPizza);
        newArrPizzaList.push(MyPizza);
        renderHolderPizzasList(newArrPizzaList);
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

// РЕНДЕР В МОДАЛЬНОЕ ОКНО
const renderСompositionList = (arrayOfСomposition) => {
    const createPizzaBox = document.getElementById('create-pizza');
    createPizzaBox.innerHTML = '';
    createPizzaBox.style.display = 'flex'

    createPizzaBox.append(renderMyPizzaCreateModal())
}

const createPizzaBtn = document.getElementById('create-pizza-btn');
// запуск рендера при нажатии кнопки
createPizzaBtn.onclick = () => renderСompositionList(newCompositionList);
//-------------------------------------------------------



//---------------------------------------------------------

// СОЗДАЕМ КАРТОЧКУ ТОВАРА
const renderCard = (pizza) => {
    const holdCard = cElem('div', 'hold-card');

    const card = cElem('div', 'card');
    card.id = `pizza${pizza.id}`;
    // ПОКАЗ МОДАЛЬНОГО ОКНА
    card.onclick = function () {
        renderPizzaCard(pizza);
        pizzaCardContainer.style.display = 'flex';
    }
    holdCard.appendChild(card);
    // img
    const img = cElem('div', 'card-img-top');
    img.innerHTML = `<img src="img/${pizza.img}" alt="icon">`;
    card.appendChild(img);
    // В ИЗБРАННОЕ
    const pizzaFavorite = cElem('div', 'pizza-card__favor');
    pizzaFavorite.innerHTML = `<button class="addToFavor"><span class="heart">&#10084;</span></button>`;
    pizzaFavorite.onclick = function () {
        pizza.isFavourite = true;
    }
    card.appendChild(pizzaFavorite);
    // h3
    const pizzaName = cElem('div', 'pizza-card__name');
    pizzaName.innerHTML = `<h3>${pizza.name}</h3>`;
    card.appendChild(pizzaName);
    // p composition
    const composition = cElem('div', 'pizza-card__composition');
    composition.innerHTML = '<ul>' + 'Состав: ' + pizza.composition.map(c => `<li>${c},</li>`).join(' ') + '</ul>';
    card.appendChild(composition);
    // p caloricity
    const caloricity = cElem('p', 'pizza-card__caloricity');
    caloricity.innerText = `Ккал: ${pizza.caloricity}`;
    card.appendChild(caloricity);
    // p price
    const price = cElem('p', 'pizza-card__price');
    price.innerText = `Цена: ${pizza.price} грн.`;
    card.appendChild(price);
    // button
    const button = cElem('button', 'pizza-card__button')
    button.innerText = 'Заказать';
    card.appendChild(button);
    button.onclick = function (e) {
        console.log(this);
    }
    return holdCard;
}

// -----------------------------------------------------


// ОТРИСОВКА НА СТРАНИЦУ
// создаем копию массива
let newArrPizzaList = [...pizzaList];

// куда отрисуем
const mainElement = document.querySelector('.holder-pizzas-list');

const renderHolderPizzasList = (arrayOfPizza) => {
    mainElement.innerHTML = ''
    for (let pizza of arrayOfPizza) {
        // каждая пицца залетает в renderCard(pizza)
        const card = renderCard(pizza);
        mainElement.appendChild(card);
    }
}
renderHolderPizzasList(newArrPizzaList)


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
    const slideImg = cElem('div', 'col-sm-12 col-md-6 slide-img');
    const img = cElem('img', 'simg');
    img.alt = 'icon';
    img.src = 'img/' + pizza.img;
    // text
    const slideText = document.createElement('div', 'col-sm-12 col-md-6 slide-text');
    slideText.innerHTML = `
                        <p>Предложение дня!</p>
                        <p>3 по цене 2</p>
                        `;
    slideImg.appendChild(img);
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

setInterval(() => {
    // если индекс = последнему (концу) массива, то индексу снова присваиваем 0, иначе +1
    indexOfName = indexOfName === pizzaOfTheDay.length - 1 ? 0 : indexOfName + 1
    renderSlideContainer(pizzaOfTheDay[indexOfName]); // через каждые 2 сек отрысов по очереди 
}, 3000);

