const cartArr = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartArr);

let amount = document.querySelector('.amount');
amount.innerHTML = cartArr.totalPrice + ' грн';

let sumPizzas = document.querySelector('.sumPizzas');
sumPizzas.innerHTML = cartArr.totalCount;


let numOrder = document.querySelector('.numOrder');

const random = ()=> {
    with (Math) {
        return floor(random() * pow(10, 10))
    }
}

//  numOrder()
numOrder.innerHTML = random();