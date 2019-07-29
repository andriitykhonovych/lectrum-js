/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100.
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение
const createNumberGenerator = function () {
    const usedNumbers = [];

     const innerFunction = function(){
        if (usedNumbers.length === 100) {
            return;
        }

        if(usedNumbers.length > 100) {
            throw new Error('Функция была вызвана, когда доступные для выведения числа закончились')
        }

        const num = Math.floor(Math.random() * 100) + 1;

        for (let i = 0; i < usedNumbers.length; i++) {
            if (num === usedNumbers[i]) return innerFunction();
        }

         usedNumbers.push(num);
         return num;

     };

    return innerFunction;
};

const TOTAL_ITERATIONS = 101;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
    for (let iteration = 1; iteration < TOTAL_ITERATIONS; iteration++) {
        console.log(`Iteration: ${iteration}. Number: ${generateNumber()}`);
        invocations += 1;
    }
} catch {
    console.log('Error caught.');
    console.log(
        `Function generated an error after ${invocations} invocations.`,
    );
}

// Когда все числа выведутся:
// Error caught.
// Function generated an error after 99 invocations.

exports.createNumberGenerator = createNumberGenerator;