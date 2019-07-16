/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
const forEach = function(array, callback) {
    if (arguments.length !== 2) {
        throw new Error('function must be called with two arguments');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter not a array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter not a function');
    }

    let counter = 0;
    const length = array.length;

    for (counter; counter < length; counter++) {
        callback(array[counter], counter, array);
    }
};

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;