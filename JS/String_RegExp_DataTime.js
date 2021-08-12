/*
 1.Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение,
 которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
*/
let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match(/a.b/g);

//2.Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let str2 = '2+3 223 2223';
let result2 = str2.match(/2\+3/);

//3.Получить день, месяц и год текущей даты и по отдельности вывести в консоль
function getActualDate() {
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
};
// getActualDate()
