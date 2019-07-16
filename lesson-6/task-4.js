/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const some = function(array, callback) {
    if (arguments.length !== 2) {
        throw new Error('function must be called with two arguments');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter not a array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter type is not a function');
    }

    let status = false;

    for (let counter = 0; counter < array.length; counter++) {
        const current = array[counter];
        status = callback(current, counter, array);

        if (status) {
            break;
        }
    }

    return status;
};

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;