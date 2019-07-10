/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const createArray = function (value, amount) {
    if(arguments.length !==2) {
        throw new Error ('function must be called with two argument');
    }

    if(typeof arguments[1] !== 'number') {
        throw new Error ('second argument not a number');
    }

    if (
        typeof arguments[0] === 'string' ||
        typeof arguments[0] === 'number' ||
        typeof arguments[0] === 'object' ||
        Array.isArray(arguments[0])
    ) {
        let arr = [];
        for(let i = 0; i < amount; i++){
            arr.push(value);
        }
        return arr;
    }

    throw new Error ('first argument not a string');
};

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;