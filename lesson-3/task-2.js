/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
const f = function() {
    let sum = 0;
    let item;
    for(item of arguments){
      if(typeof item === 'number'){
          sum += item++;
      } else {
          throw new Error ('all parameters should be a Number type');
      }
    }

    return sum;
};

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

export { f };
/* не удалять */