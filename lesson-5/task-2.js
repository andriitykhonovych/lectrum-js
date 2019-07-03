/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение
const checkSpam = function(source, example){
    if(typeof source === 'string' && typeof example === 'string'){
        const sourceLowerCase = source.toLowerCase();
        const exampleLowerCase = example.toLowerCase();

        return sourceLowerCase.includes(exampleLowerCase);
    } else {
        throw new Error ('not a string');
    }
};

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;