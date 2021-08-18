// Типы данных:
const str = 'String'; // string
const isBoolean = true; // boolean
const num = 42; // number

// Cложение различных типов:
console.log(str + isBoolean); // string + boolean
console.log(str + num); // string + number
console.log(num + isBoolean); // number + boolean

// Умножение различных типов:
console.log(str * isBoolean); // string * boolean
console.log(str * num); // string * number
console.log(num * isBoolean); // number * boolean

// Деление различных типов:
console.log(str / isBoolean); // string / boolean
console.log(str / num); // string / number
console.log(num / isBoolean); // number / boolean

// Явное преобразование:
console.log(Number(str), Number(isBoolean)); // number
console.log(String(isBoolean), String(num)); // string
console.log(Boolean(num), Boolean(str)); // boolean
