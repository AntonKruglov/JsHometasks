/*
  1. Дан массив состоящий из названий фильмов,
  выполните перебор массива с выводом в консоль названия каждого фильма
*/
const movies = ['The Godfather', '12 Angry Men', 'Casablanca', 'Rear Window', 'City Lights', ];

function getMovie(arr) {
    arr.forEach(movie => console.log(movie));
}
// getMovie(movies);


//2. Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
const cars = ['Mazda', 'BMW', 'Reno', 'Honda', 'Mercedes', ];
const getString = arr => arr.join(', ');
const getArray = str => str.split((','));
// getString(cars); // array into string
// getArray(getString(cars)); // string into array


//3. Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
const myPals = ['Петя', 'Вася', 'Глафира', 'Ольга', 'Елена', ];

function addHello(arr) {
    return arr.map(pal => 'Hello, ' + pal);
}
// addHello(myPals);


//4. Преобразовать числовой массив в Boolean
const numArr = [1, 2, 3, 4, 5, ];

function getBoolean(arr) {
    return arr.map(num => Boolean(num));
}
// getBoolean(numArr);


//5. Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
const numArray = [1, 6, 7, 8, 3, 4, 5, 6, ];

function getDescOrderArray(arr) {
    return arr.sort((a, b) => b - a);
}
// getDescOrderArray(numArray);


//6. Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
function getFilteredArray(arr) {
    return arr.filter(num => num > 3);
}
// getFilteredArray(numArray);


/*
  7. Написать функцию, которая принимает два параметра - массив и число
  и выводит индекс элемента массива равный числу
*/
function getElementIndex(arr, num) {
    arr.indexOf(num);
}
//getElementIndex(numArray, 7);


//8. Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
function countDownToNine(num) {
    for (let a = num; a > 9; a--) {
        alert(a);
    }
}
// countDownToNine(20);


// 9. Реализовать цикл, который выводит в консоль простые числа
function getPrimeUpToNum(num) {
    nextPrime: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        console.log(i);
    }
}
// getPrimeUpToNum(100);


// 10. Реализовать цикл, который выводит в консоль нечетные числа
function getOddUpToNum(num) {
    let i = 0;
    while (i < num) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}
// getOddUpToNum(100);