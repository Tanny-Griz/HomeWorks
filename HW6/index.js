const arrOfUsers = []
for (let i = 0; i < 50; i++) {
    let fakeData = faker.helpers.createCard()
    arrOfUsers.push(fakeData)
}

// 1 Cоздать функцию-конструктор Customer. Создаем функцию которая будет пушить в новый массив cutomerInstancessArr экземпляры созданные через new Customer(customer). Данные лежат в массиве arrOfUsers. У каждого созданного экзепляра должен быть уникальный id (cсоздаем в функции конструкторе)

function Customer(customer) {
    this.id = cutomerInstancessArr.length;
    Object.assign(this, customer);
}

let cutomerInstancessArr = [];

function pushCustomer() {
    arrOfUsers.forEach(function (item) {
        let newCustomer = new Customer(item);
        cutomerInstancessArr.push(newCustomer);
    });
}

pushCustomer();
console.log(cutomerInstancessArr);

// 2 Создать функцию getAllNameSAndEmails который вернет массив с обьектами в которых должны находится имя и email кастомера.
console.log('----------------2-----------------');

function getAllNameSAndEmails(arr) {
    let arrNameAndEmail = [];

    for (let cust of arr) {
        arrNameAndEmail.push({
            name: cust.name,
            email: cust.email,
        });
    }
    return arrNameAndEmail
}
console.log(getAllNameSAndEmails(arrOfUsers));
console.log(arrOfUsers);

// 3 Создать функцию getAllCustomersIdsWithComDomain которая вернет массив с id кастомеров, у которых свойство website имеет доменное имя первого уровня .com (site.com, james-site.com, harvik.com etc.)
console.log('----------------3-----------------');

function getAllCustomersIdsWithComDomain(arr) {
    // массив только с id
    let arrCustomersId = [];

    for (let cust of arr) {
        let web = cust.website;
        if (web.includes('.com')) {
            arrCustomersId.push(cust.id);
        }
    }
    return arrCustomersId;
}

console.log(getAllCustomersIdsWithComDomain(cutomerInstancessArr));



// 4 Создать функцию getAllGmailCustomers которая вернет массив с id кастомеров, у которых свойство email имеет почтовый сервер gmail.com (alex@gmail.com, someHuman@gmail.com, etc.)
console.log('----------------4-----------------');

function getAllGmailCustomers(arr) {
    let arrCustomersId = [];

    for (let cust of arr) {
        let em = cust.email;
        if (em.includes('gmail.com')) {
            arrCustomersId.push(cust.id);
        }
    }
    return arrCustomersId;
}

console.log(getAllGmailCustomers(cutomerInstancessArr));

// 5 Создать функцию sortByCompanyType которая вернет объект, в котором будут свойства, ключами которых будут типы компаний, а значением этих ключей id кастомеров в которых они работают
console.log('----------------5-----------------');

function sortByCompanyType(arr) {
    let properties = {
        LLC: [],
        GROUP: [],
        Inc: [],
    };

    for (let key in arr) {
        let nameCompany = arr[key].company;
        let ids = arr[key].id;

        for (let name in nameCompany) {
            if (nameCompany.name.toLowerCase().includes('llc')) {
                properties.LLC.push(ids);
            }
            else if (nameCompany.name.toLowerCase().includes('group')) {
                properties.GROUP.push(ids);
            }
            else if (nameCompany.name.toLowerCase().includes('inc')) {
                properties.Inc.push(ids);
            }
        }
    }
    return properties;
}

console.log(sortByCompanyType(cutomerInstancessArr));

// 6 Содать функцию которая вернет отсартированный массив кастомеров по их общим тратам (свойство accountHistory смотрим на amount). Сортировка по возрастанию.
console.log('----------------6-----------------');

function Customer2(customer) {
    Object.assign(this, customer);
}

let arrSum = arrOfUsers.map(function (item) {
    let newCustomer = new Customer2(item);
    let customerAccHist = item.accountHistory;
    newCustomer.sumAmount = customerAccHist.reduce(function (p, c) {
        return p + parseFloat(c.amount);
    }, 0);
    return newCustomer.sumAmount
});

console.log(arrSum)

// Сортировка по возрастанию
let sortAscending = arrSum.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
});

console.log(sortAscending);

// 7 Содать функцию которая вернет отсартированный массив кастомеров по их общим тратам (свойство accountHistory смотрим на amount). Сортировка по параметру функции. Параметров может быть 2 вида ('asc', 'desc').

function sortWithParam(param) {
    if (param === 'asc') {
        let sortAscending = arrSum.sort(function (a, b) {
            if (a < b) {
                return -1
            }
        })
    }
    else if (param === 'desc') {
        let sortAscending = arrSum.sort(function (a, b) {
            if (a > b) {
                return -1
            }
        })
    }
    return sortAscending
}
console.log(sortWithParam('desc'));

