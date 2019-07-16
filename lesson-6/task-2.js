/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = function(array, callback) {
    if (arguments.length !== 2) {
        throw new Error('function must be called with two arguments');
    }

    if (!Array.isArray(array)) {
        throw new Error('first parameter not a array');
    }

    if (!(typeof callback === 'function')) {
        throw new Error('second parameter not a function');
    }

    const filtered = [];

    for (let counter = 0; counter < array.length; counter++) {
        const current = array[counter];
        const status = callback(current, counter, array);

        if (status) {
            filtered.push(current);
        }
    }

    return filtered;
};

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;