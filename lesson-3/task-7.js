/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение
let divisor = [];
const getDivisors = function(number) {
    if(typeof number === 'number' && number > 0){
        let i = 1;

        while(i < number) {
            if(number % i === 0) {
                divisor.push(i)
            }
            i = i + 1;
        }

    } else if (typeof number === 'number' && number === 0) {
        throw  new Error ('Error: parameter can\'t be a 0');
    } else {
        throw  new Error ('Error: parameter type is not a Number');
    }

    return divisor;
};

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

export { getDivisors };
/* не удалять */