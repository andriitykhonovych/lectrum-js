/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = function(array, callback, acc) {
    if (arguments.length !== 3) {
        throw new Error('function must be called with two arguments');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter not a array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a function');
    }

    if (!(typeof acc === 'number' || typeof acc === 'string')) {
        throw new Error('third parameter should be number or string');
    }

    let accumulator = acc;

    for (let counter = 0; counter < array.length; counter++) {
        accumulator = callback(accumulator, array[counter], counter, array);
    }

    return accumulator;
};

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;