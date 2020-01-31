// ----- modal-----
const pizzaCardContainer = document.querySelector('.pizza-info');
const modal = document.getElementById('modal-content');

// const hideBtn = document.querySelector('.pizza-info__hide');
// const close = document.querySelector('.pizza-info__close');


// при клике на модальное окно
pizzaCardContainer.addEventListener('click', function(e) {
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
})

// закрытие модалки
// function closeModal() {
//     modal.classList.add('hide');
//     document.onkeydown = null;
// }

// close.onclick = closeModal;
// hideBtn.onclick = closeModal;


// open_btn.onclick = function() {
//     modal.classList.remove('hide');
//     document.onkeydown = function(e) {
//     	console.log(e);
// 	if(e.keyCode == 27){
// 		modal.classList.add('hide');
// 		document.onkeydown = null;
// 	}
// }
// }

// close.onclick = function() {
//     modal.classList.add('hide');
//     document.onkeydown = null;
// }

// hide_btn.onclick = function() {
//     modal.classList.add('hide');
//     document.onkeydown = null;
// }

const renderPizzaCard = (pizza) => {
    const template = `
            <div class="pizza-info__header">
                <a href="#close" title="Close" class="pizza-info__close">X</a>
                <h3>${pizza.name}</h3>
            </div>
            <div class="modal-body">
            <p>Состав: </p>
            <ul>
                ${
                    pizza.composition.map(composition => {
                        return `<li class="d-inline-flex">${composition}, </li>`
                    }).join('')
                }
            </ul>
            </div>
            <div class="modal-footer">
                <p>Каллории: ${pizza.caloricity}</p>
                <p>Цена: ${pizza.price} грн.</p>
                <button class="pizza-info__hide">Hide</button>
            </div>
    `
    modal.innerHTML = template;
}

let p = pizzaList[1];
renderPizzaCard(p)
// ----- end modal-----

// ---- card ---- создаем карточку товара
const renderCard = (pizza) => {
    const holdCard = document.createElement('div');
    holdCard.className = 'hold-card';
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `pizza${pizza.id}`;
    card.onclick = function() {
        renderPizzaCard(pizza);
        pizzaCardContainer.style.display = 'flex';
    }
    holdCard.appendChild(card);
    // img
    const img = document.createElement('div');
    img.innerHTML = `<img src="img/${pizza.img}" alt="icon">`;
    img.classList.add('card-img-top');
    card.appendChild(img);
    // 4. favorite
    const pizzaFavorite = document.createElement('div');
    pizzaFavorite.className = 'pizza-card__favor';
    pizzaFavorite.innerHTML = `<button class="addToFavor"><span class="heart">&#10084;</span></button>`;
    pizzaFavorite.onclick = function () {
        pizza.isFavourite = true;
        console.log(pizza);
    }
    card.appendChild(pizzaFavorite);
    // h3
    const pizzaName = document.createElement('div');
    pizzaName.className = 'pizza-card__name';
    pizzaName.innerHTML = `<h3>${pizza.name}</h3>`;
    card.appendChild(pizzaName);
    // p composition
    const composition = document.createElement('div');
    composition.innerHTML = '<ul>' + 'Состав: ' + pizza.composition.map(c => `<li>${c},</li>`).join(' ') + '</ul>';
    composition.className = 'pizza-card__composition';
    card.appendChild(composition);
    // p caloricity
    const caloricity = document.createElement('p');
    caloricity.className = 'pizza-card__caloricity';
    caloricity.innerText = `Ккал: ${pizza.caloricity}`;
    card.appendChild(caloricity);
    // p price
    const price = document.createElement('p');
    price.className = 'pizza-card__price';
    price.innerText = `Цена: ${pizza.price} грн.`;
    card.appendChild(price);
    // button
    const button = document.createElement('button')
    button.className = 'pizza-card__button';
    button.innerText = 'Заказать';
    card.appendChild(button);

    button.onclick = function (e) {
        console.log(this);
    }
    return holdCard;
}

// ---- end card ----

// рендерим в див
const renderHolderPizzasList = (arrayOfPizza) => {
    const mainElement = document.querySelector('.holder-pizzas-list');

    mainElement.innerHTML = ''
    for (let pizza of arrayOfPizza) {
        const card = renderCard(pizza);
        mainElement.appendChild(card);
    }
}
renderHolderPizzasList(pizzaList)

// селект по возрастанию, по убыванию цены
const select = document.getElementById('select');

select.onchange = function () {
    const newArr = [...pizzaList];
    newArr.sort((a, b) => {
        if (a.price < b.price) return this.value === '1' ? -1 : 1
        if (a.price > b.price) return this.value === '1' ? 1 : -1
        if (a.price === b.price) return 0
    })
    renderHolderPizzasList(newArr);
}

// 1. Поиск должен быть живой, то есть при вводе символов в input без нажатия на кнопку search должны выводиться соответсвующие карточки.

const input = document.getElementById('inputFind');

input.addEventListener('input', function (e) {
    let newArr = [...pizzaList].filter(pizza => {
        let eTargetValue = e.target.value.toLowerCase();
        if (pizza.name.toLowerCase().includes(eTargetValue)) {
            return true
        }
        if (pizza.composition.join(' ').toLowerCase().includes(eTargetValue)) {
            return true
        }
    })
    newArr = newArr.map(pizza => {
        let composition = [...pizza.composition].map(comp => {
            if (e.target.value.length && comp.includes(e.target.value)) {
                return `<span class="pink">${comp}</span>`
            }
            return comp
        })
        return {...pizza, composition}
    })
    renderHolderPizzasList(newArr)
})

// 2. Добавить фильтрацию по-калориям и по-цене. Фильтрация должна иметь поля ( input ) "от" и "до". Выводиться новый пиццы должны только при нажатии на кнопку search.

let inputFrom = document.getElementById('inputFrom');
let inputTo = document.getElementById('inputTo');
let btnFind = document.getElementById('btn-find');
const selectFilter = document.getElementById('select-filter');

let sortPizzasByCaloricity = () => {
    const valueOfFilterFrom = inputFrom.value
    const valueOfFilterTo = inputTo.value
    const newArrCaloricity = [...pizzaList].filter((pizza) => {
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
    const newArrPrice = [...pizzaList].filter((pizza) => {
        if (pizza.price > valueOfFilterFrom && pizza.price < valueOfFilterTo) {
            return true
        }
        return false
    })
    renderHolderPizzasList(newArrPrice);
}
btnFind.onclick = function () {
    if (selectFilter.value == '1') {
        sortPizzasByCaloricity();
    }
    if (selectFilter.value == '2') {
        sortPizzasByPrice();
    }
}

// 3. Добавить кнопку сброса фильтров.
let btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', resetFilterValue);

function resetFilterValue() {
    inputFrom.value = null;
    inputTo.value = null;
    renderHolderPizzasList(pizzaList);
}

// 4. Добавить возможность добовлять пиццу в избранное. То есть при нажатии на кнопку, которая находится на карточке с пиццей в виде сердечка или любого другого элемента пицца принимает поле isFavourite: true.

const addToFavor = document.getElementById('addToFavor');

// 5. Добавить баннер - слайдер, где автоматически будут каждую секунду показываться пицца с полем priceOfTheDay: true, которое вы можете сами добавить любым на ваш быбор пиццам в самом коде. Можете имспользовать мой обновленный массив пицц. Банер должен распологаться выше карточек с пиццами. Дизайн произвольный. Разрешено использовать в качесиве слайдера любую библиотеку.

const renderSlide = (pizza) => {
    const holderSlider = document.createElement('div');
    holderSlider.className = 'row holder-slider-item';
    // img
    const slideImg = document.createElement('div');
    slideImg.className = 'col-4 slide-img';
    const img = document.createElement('img');
    img.alt = 'icon';
    img.classList.add('simg');
    img.src = 'img/' + pizza.img;
    // text
    const slideText = document.createElement('div');
    slideText.className = 'col-8 slide-text';
    slideText.innerHTML = `
                        <p>Предложение дня!</p>
                        <p>3 по цене 2</p>
                        `;
    // в див slide-img засунем img
    slideImg.appendChild(img);
    holderSlider.appendChild(slideImg);
    holderSlider.appendChild(slideText);

    return holderSlider
}

let indexOfName = 0;

// массив с отфильтрованными пиццами по priceOfTheDay
const pizzaOfTheDay = pizzaList.filter(pizza => {
    if (pizza.priceOfTheDay == true) {
        return true
    }
})
// console.log(pizzaOfTheDay);


// заходит первая пицца
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
}, 2000);



