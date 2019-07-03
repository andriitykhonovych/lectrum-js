/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение
const upperCaseFirst = function(string) {
    if(typeof string === 'string') {
        const upperCaseFirstSymbol = string[0].toUpperCase();
        const stringWithoutFirstSymbol = string.slice(1);
        return `${upperCaseFirstSymbol}${stringWithoutFirstSymbol}`;
    } else {
        throw new Error ('not a string')
    }
};

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;