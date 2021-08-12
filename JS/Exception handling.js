/*
  В try catch конструкцию завернуть код: console.log(a), let a = 3. 
  И вывести ошибку – ‘let перед использованием нужно объявить’.
*/
try {
    console.log(a);
    let a = 3;
} catch (err) {
    console.log(`let перед использованием нужно объявить`);
}

// При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
function getDividedNumber(a, b) {
    if (b == 0) {
        throw new Error('на ноль делить нельзя');
    }
    return a / b;
};
getDividedNumber(1, 0);
