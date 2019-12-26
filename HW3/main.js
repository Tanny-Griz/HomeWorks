const pizzaList = [
    {
        id: 1,
        img: "1.png",
        name: "Супер гриль",
        composition: [
            "охотничьи колбаски",
            "сосиски",
            "моцарелла",
            "баклажан",
            "томаты",
            "лук",
            "перец",
            "соус томатный",
            "соус BBQ",
            "зеленый соус",
            "майонез"
        ],
        caloricity: 1569,
        price: 249
    },
    {
        id: 2,
        img: "2.jpg",
        name: "Маргарита",
        composition: ["томаты", "моцарелла", "орегано", "базилик", "соус Pomodoro"],
        caloricity: 1042,
        price: 70
    },
    {
        id: 3,
        img: "3.jpg",
        name: "Карбонара",
        composition: [
            "ветчина",
            "шампиньоны",
            "пармезан",
            "моцарелла",
            "томаты",
            "яйцо перепелиное",
            "смесь перцев",
            "соус Carbonara"
        ],
        caloricity: 1369,
        price: 119
    },
    {
        id: 4,
        img: "4.jpg",
        name: "C сырным бортиком",
        composition: [
            "хамон",
            "моцарелла",
            "сливочный сыр",
            "персик",
            "сливки",
            "руккола"
        ],
        caloricity: 1140,
        price: 139
    },
    {
        id: 5,
        img: "5.png",
        name: "Полло",
        composition: [
            "куриное филе sous-vide",
            "ананас",
            "моцарелла",
            "орегано",
            "перец чили",
            "соус Pomodoro"
        ],
        caloricity: 1232,
        price: 99
    },
    {
        id: 6,
        img: "6.jpeg",
        name: "Пепперони",
        composition: ["Салями Пепперони", "моцарелла", "орегано", "соус Pomodoro"],
        caloricity: 1280,
        price: 119
    },
    {
        id: 7,
        img: "7.png",
        name: "Гурмео",
        composition: [
            "охотничьи колбаски",
            "салями пепперони",
            "ветчина",
            "куриное филе sous-vide",
            "шампиньоны",
            "орегано",
            "соус BBQ"
        ],
        caloricity: 1343,
        price: 149
    },
    {
        id: 8,
        img: "8.jpeg",
        name: "Четыре сыра",
        composition: [
            "пармезан",
            "дор блю",
            "чеддер",
            "моцарелла",
            "груша",
            "грецкий орех",
            "соус сливочный"
        ],
        caloricity: 1220,
        price: 109
    },
    {
        id: 9,
        img: "9.jpeg",
        name: "Американо",
        composition: [
            "куриное филе sous-vide",
            "салями",
            "пепперони",
            "охотничьи колбаски",
            "кукуруза",
            "моцарелла",
            "лук",
            "орегано",
            "соус Pomodoro",
            "соус BBQ"
        ],
        caloricity: 1422,
        price: 149
    },
    {
        id: 10,
        img: "10.jpg",
        name: "Кальцоне",
        composition: [
            "ветчина",
            "шампиньоны",
            "дор блю",
            "моцарелла",
            "томаты",
            "орегано"
        ],
        caloricity: 1056,
        price: 99
    },
    {
        id: 11,
        img: "11.png",
        name: "Берлускони",
        composition: [
            "сливочный соус из белых грибов и шампиньонов с трюфельным маслом",
            "моцарелла",
            "дор блю",
            "орегано",
            "лук"
        ],
        caloricity: 1293,
        price: 125
    },
    {
        id: 12,
        img: "12.png",
        name: "Супер гриль",
        composition: [
            "охотничьи колбаски",
            "сосиски",
            "сыр моцарелла",
            "баклажан",
            "томаты",
            "лук",
            "перец",
            "соус томатный"
        ],
        caloricity: 1410,
        price: 132
    },
    {
        id: 13,
        img: "13.jpeg",
        name: "Кампанья",
        composition: [
            "охотничьи колбаски",
            "ветчина",
            "салями пепперони",
            "куриное филе sous-vide",
            "шампиньоны",
            "моцарелла",
            "томаты"
        ],
        caloricity: 1510,
        price: 144
    },
    {
        id: 14,
        img: "14.png",
        name: "Дьявола",
        composition: [
            "горчичный соус",
            "моцарелла",
            "молочные сосиски",
            "бекон",
            "помидор",
            "зелень"
        ],
        caloricity: 1180,
        price: 107
    },
    {
        id: 15,
        img: "15.png",
        name: "Бекон ранч",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "бекон",
            "ветчина",
            "телятина",
            "помидор",
            "перец болгарский",
            "соус ранч"
        ],
        caloricity: 1322,
        price: 113
    },
    {
        id: 16,
        img: "16.png",
        name: "Гроссето",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "лосось",
            "креветки",
            "сладкий перец",
            "маслины",
            "лимон",
            "базилик",
            "орегано"
        ],
        caloricity: 980,
        price: 159
    },
    {
        id: 17,
        img: "17.png",
        name: "Тоскана",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "ветчина",
            "бекон",
            "салями-пеперони",
            "сладкий перец",
            "сыр «Пармезан»",
            "базилик",
            "орегано"
        ],
        caloricity: 1310,
        price: 139
    },
    {
        id: 18,
        img: "18.png",
        name: "Грибная",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "шампиньоны",
            "опята",
            "маслины",
            "лук",
            "базилик",
            "орегано",
            "зелень"
        ],
        caloricity: 1451,
        price: 132
    },
    {
        id: 19,
        img: "19.png",
        name: "Туринская",
        composition: [
            "горчичный соус",
            "моцарелла",
            "салями",
            "охотничьи колбаски",
            "огурцы маринованные",
            "зелень"
        ],
        caloricity: 1140,
        price: 138
    },
    {
        id: 20,
        img: "20.jpg",
        name: "Венецианская",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "телятина",
            "куриная грудка",
            "бекон",
            "шампиньоны",
            "помидор",
            "перец",
            "пармезан",
            "зелень"
        ],
        caloricity: 1341,
        price: 142
    },
    {
        id: 21,
        img: "21.jpg",
        name: "Четыре сезона",
        composition: [
            "фирменный пицца-соус",
            "моцарелла",
            "опята",
            "куриная грудка",
            "помидор",
            "перец",
            "лук",
            "шампиньоны",
            "пармезан",
            "зелень"
        ],
        caloricity: 1479,
        price: 145
    }
];

const compositionList = [
    {
        id: 1,
        name: "Моцарела",
        caloricity: 28,
        price: 15
    },
    {
        id: 2,
        name: "Креветки",
        caloricity: 37,
        price: 35
    },
    {
        id: 3,
        name: "Салями",
        caloricity: 42,
        price: 25
    },
    {
        id: 4,
        name: "Лук",
        caloricity: 13,
        price: 7
    },
    {
        id: 5,
        name: "Томаты",
        caloricity: 21,
        price: 17
    },
    {
        id: 6,
        name: "Ветчина",
        caloricity: 37,
        price: 35
    }
];

// Создать функцию, которая вернет массив с названиями пицц.
// 1.1 (key in obj)
const getPizzasNames = () => {
    let pizzaName = [];
    for (let key in pizzaList) {
        pizzaName.push(pizzaList[key].name + ', ');
    }
    console.log(pizzaName);
};

getPizzasNames(pizzaList);

// 1.2 (i)
const getPizzasNames2 = () => {
    let pizzaName = [];
    for (let i = 0; i < pizzaList.length; i++) {
        pizzaName.push(pizzaList[i].name + ', ');
    }
    console.log(pizzaName);
};

getPizzasNames2(pizzaList);

// 1.3  forEach()
const getPizzasNames3 = () => {
    let pizzaName = [];
    pizzaList.forEach(function (item) {
        pizzaName.push(item.name + ', ');
    });
    console.log(pizzaName);
}

getPizzasNames3();

console.log('------------------------2----------------------');

// Создать функцию, которая вернет обьект с пиццей по id.
// 2.1
const getPizzaById = id => {
    let pizzaId = '';
    for (let key in pizzaList) {
        if (pizzaList[key].id == id) {
            pizzaId = pizzaList[key];
            console.log(pizzaId);
        }
    }
};

getPizzaById(2); // {id: 2, img: "2.jpg", name: "Маргарита"};

//  2.2
const getPizzaById2 = id => {
    let pizzaId = '';
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id == id) {
            pizzaId = pizzaList[i];
            console.log(pizzaId);
        }
    }
};

getPizzaById2(3);

//  2.3
const getPizzaById3 = id => {
    let pizzaId = '';
    pizzaList.forEach(function (item) {
        if (item.id == id) {
            pizzaId = item;
            console.log(pizzaId);
        }
    });
};

getPizzaById3(6);

console.log('---------------------3-------------------------');

//  Создать функцию, которая вернет массив с пиццами в которых содержится ингридиент указанный в параметре функции.
// 3.1
let getPizzasByComposition = (number) => {
    let result = [];
    for (let key in pizzaList) {
        let composition = pizzaList[key].composition;
        for (let i = 0; i <= composition.length; i++) {
            if (composition[i] == number) {
                result.push(pizzaList[key]);
            }
        }
    }
    console.log(result);
};

getPizzasByComposition('моцарелла'); /// [{id: 2, img: "2.jpg", name: "Маргарита", composition:['моцарелла', ...]}, ...];

// 3.2
let getPizzasByComposition2 = (number) => {
    let result = [];
    pizzaList.forEach(function (item) {
        let composition = item.composition;
        for (let i = 0; i <= composition.length; i++) {
            if (composition[i] == number) {
                result.push(item);
            }
        }
    });
    console.log(result);
};

getPizzasByComposition2('моцарелла');

console.log('---------------------4-------------------------');

// Создать функцию, которая вернет массив с пиццами в которых каллории больше чем maxCaloricity.

// 4.1 
const maxCaloricity = 1100;

const getPizzasByCalloricity = caloricity => {
    let result = [];
    for (let key in pizzaList) {
        let cal =  pizzaList[key].caloricity;
        if (cal > caloricity) {
            result.push(pizzaList[key]);
        }
    }
    console.log(result);
};

getPizzasByCalloricity(maxCaloricity); /// [{id: 2,name: "Маргарита", caloricity: 1200, ...]}, ...];

// 4.2
const maxCaloricity2 = 1400;

const getPizzasByCalloricity2 = caloricity => {
    let result = [];
    pizzaList.forEach(function (item) {
        let cal =  item.caloricity;
        if (cal > caloricity) {
            result.push(item);
        }
    })
    console.log(result);
};

getPizzasByCalloricity2(maxCaloricity2);

console.log('---------------------5-------------------------');

// Создать функцию, которая вернет массив со всеми пиццами, кроме пиццы с указанным id.
// 5.1
const getAllWithoutPizzaById = id => {
    let result = [];
    for (let key in pizzaList) {
        if (pizzaList[key].id !== id) {
            result.push(pizzaList[key]);
        }
    }
    console.log(result);
};

getAllWithoutPizzaById(2); /// [{id: 3,name: "Маргарита", caloricity: 1200, ...]}, ...];

// 5.2
const getAllWithoutPizzaById2 = id => {
    let result = [];
    pizzaList.forEach(function(item) {
       if (item.id !== id) {
            result.push(item);
        } 
    })
    console.log(result);
};

getAllWithoutPizzaById2(3);

console.log('---------------------6-------------------------');

// Создать функцию, которая вернет массив со всеми пиццами, у которых кол-во ингридиентов (compositions) больше чем maxCompositions.
//  6.1
const maxCompositions = 6;

const sortByMaxCompositions = compositions => {
    let result = [];
    for (let key in pizzaList) {
        let comp = pizzaList[key].composition;
        if (comp.length > compositions) {
            result.push(pizzaList[key]);
        }
    }
    console.log(result);
};

sortByMaxCompositions(maxCompositions); /// [{id: 2,name: "Маргарита", caloricity: 1200, ...]}, ...];

// 6.2 
const maxCompositions2 = 9;

const sortByMaxCompositions2 = compositions => {
    let result = [];
    pizzaList.forEach(function(item) {
        let comp = item.composition;
        if (comp.length > compositions) {
            result.push(item);
        }
    })
    console.log(result);
};

sortByMaxCompositions2(maxCompositions2);