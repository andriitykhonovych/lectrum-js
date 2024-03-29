/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение

const f = function(item) {
    if( typeof item === 'number') {
        return item * 3;
    } else {
        throw new Error ('parameter is not a number type');
    }
};

/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */