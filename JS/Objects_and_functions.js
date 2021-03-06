//Создать объект car, добавить к нему свойство color со значением 'черный'
const car = {
    color: 'Чёрный',
    // В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
    power() {
        console.log('Мощность двигателя 230 л.с.')
    }
};
//Изменить свойство color объекта car на 'зеленый'
car.color = 'Зелёный';


/*
  На склад принимают груши и яблоки, напишите функцию,
  которая возвращает результат сложения количества принятых груш и яблок
*/
function addSum(pear, apple) {
    return pear + apple
}


/*
  В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
  (если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
*/
const payTerminal = { // Терминал оплаты
    name: 'Антон',
    age: 42
};

function checkName(term, name) {
    if (name === term.name) {
        return 'Привет, ' + name;
    } else {
        return 'Нет такого имени';
    }
}


//Напишите функцию вычисления типа аргумента и вывод типа в консоль
function getTypeOfArgument(arg) {
    return console.log(typeof arg)
}


//Напишите функцию, которая определяет является ли число простым или нет
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4))