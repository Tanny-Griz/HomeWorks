window.cElem = (tagName, className = "") => {
    const element = document.createElement(tagName)
    element.className = className;
    return element
}

// ----- modal-----
const pizzaCardContainer = document.querySelector('.pizza-info');
const modal = document.getElementById('pizzaInfo');

// ф-я закрытия модалки
function hendlerClose(e) {
    // считываем класс у эл-та
    const elemClassName = e.target.className;
    console.log(elemClassName)
    // если он = pizza-info'
    if(
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
    modal.innerHTML = template;
}
// ----- end modal-----

// ----- create pizza modal---

const createPizza = document.getElementById('create-pizza');
const modalCreate = document.getElementById('modal-content-create');
createPizza.addEventListener('click', hendlerClose);

const renderMyPizzaCreateModal = () => {
    const pizzaInfoCard = cElem('div', 'pizza-info__card');


    const pizzaInfoHeader = document.createElement('div');
    pizzaInfoHeader.className = 'pizza-info__header';

    const aClose =  document.createElement('a');
    aClose.className = 'pizza-info__close';
    aClose.innerText = 'X';
    aClose.href = '#'

    let h2 = document.createElement('h2');

    const inputPizzaName = document.createElement('input');
    inputPizzaName.className = 'form-control';
    inputPizzaName.placeholder = 'Введите название'

    const pizzaInfoBody = document.createElement('div');
    pizzaInfoBody.className = 'row pizza-info__body';

    const col12 = document.createElement('div');
    col12.className = 'col-12';
    col12.innerHTML = '<span>Добавить: </span>';

    const pizzaInfoComposition = document.createElement('div');
    pizzaInfoComposition.className = 'pizza-info__composition';

    const formCheck = document.createElement('div');
    formCheck.className = 'form-check';

    /// Добавили все состовляющие в виде инпутов и лейблов
    for (let comp of compositionList){
        const formCheckInput = document.createElement('input');
        formCheckInput.className = 'form-check-input';
        formCheckInput.id = `exampleCheck${comp.id}`;
        formCheckInput.type = 'checkbox';
        formCheck.onchange = function(){
            console.log(this.checked)
            console.log({...comp})
        }

        const formCheckLabel = document.createElement('label');
        formCheckLabel.className = 'form-check-input';
        formCheckLabel.htmlFor = `exampleCheck${comp.id}`;
        formCheckLabel.innerHTML = `<p>${comp.name}</p>` 

        formCheck.appendChild(formCheckLabel);
        formCheck.appendChild(formCheckInput);
    }

    const p1 = document.createElement('p');
    p1.innerText = `Каллории: ${'ccal'}`;

    const p2 = document.createElement('p');
    p2.className = 'pizza-info__price'
    p2.innerText = `Цена: ${'price'} грн.`;

    const pizzaInfoFooter = document.createElement('div');
    pizzaInfoFooter.className = 'pizza-info__footer';

    const pizzaInfoCreate = document.createElement('button');
    pizzaInfoCreate.className = 'pizza-info__Create';
    pizzaInfoCreate.innerText = 'Create';

    const pizzaInfoHide = document.createElement('button');
    pizzaInfoHide.className = 'pizza-info__hide';
    pizzaInfoHide.innerText = 'Hide';

    pizzaInfoCard.appendChild(pizzaInfoHeader);
    pizzaInfoHeader.appendChild(aClose);
    pizzaInfoHeader.appendChild(h2);
    pizzaInfoHeader.appendChild(inputPizzaName);
    pizzaInfoCard.appendChild(pizzaInfoBody);
    pizzaInfoBody.appendChild(col12);
    col12.appendChild(pizzaInfoComposition);
    pizzaInfoComposition.appendChild(formCheck);

    pizzaInfoComposition.appendChild(p2);
    pizzaInfoComposition.appendChild(p1);

    pizzaInfoFooter.appendChild(pizzaInfoCreate);
    pizzaInfoFooter.appendChild(pizzaInfoHide);
    pizzaInfoCard.appendChild(pizzaInfoFooter);

    return pizzaInfoCard
}

const renderNewPizza = (pizza) => {
    pizza.onclick = function() {
        renderMyPizzaCreate(pizza);
        pizzaCardContainer.style.display = 'flex';
    }
}

const renderСompositionList = (arrayOfСomposition) => {
    const createPizzaBox = document.getElementById('create-pizza');
    createPizzaBox.innerHTML = '';
    createPizzaBox.style.display = 'flex'

    createPizzaBox.appendChild(renderMyPizzaCreateModal())
}

const createPizzaBtn = document.getElementById('create-pizza-btn');
createPizzaBtn.onclick = () => renderСompositionList(compositionList);


// СОЗДАЕМ КАРТОЧКУ ТОВАРА
const renderCard = (pizza) => {
    const holdCard = cElem('div', 'hold-card');

    const card = cElem('div', 'card');
    card.id = `pizza${pizza.id}`;
    // ПОКАЗ МОДАЛЬНОГО ОКНА
    card.onclick = function() {
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

// ---- end КАРТОЧКА ТОВАРА ----


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
        return {...pizza, composition}
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

