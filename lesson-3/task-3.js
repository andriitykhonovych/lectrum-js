/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
const f = function(first, second, third){
    if(typeof first === 'number' || typeof second === 'number' || typeof third === 'number') {
        return (first - second)/third;
    } else {
        throw new Error ('all parameters type should be a Number');
    }
};

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

export { f };
/* не удалять */