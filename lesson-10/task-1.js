/**
 * Задача 1.
 *
 * Напишите имплементацию функции Function.prototype.bind().
 *
 * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
 * и возвращать новую, привязанную версию целевой функции.
 *
 * Функция bind() должна обладать следующими параметрами:
 * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
 * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
 * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 *
 * Генерировать ошибки если:
 * - Первый параметр не является типом function;
 * - Второй параметр не является типом object;
 * - Второй параметр является массивом.
 *
 * Условия:
 * - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение
const bind = function (func, obj, ...rest) {
    if( typeof func !== 'function'){
        throw new Error ('Первый параметр не является типом function')
    }

    if(typeof obj !== 'object'){
        throw new Error ('Второй параметр не является типом object')
    }

    if(Array.isArray(obj)){
        throw new Error ('Второй параметр является массивом')
    }

    const bindArgs = [].slice.call(arguments, 2);
    console.log('bindArgs', bindArgs);
    return function() {
        const fnArgs = [].slice.call(arguments);
        console.log('fnArgs', fnArgs);
        return func.apply(obj, bindArgs.concat(fnArgs));
    };
};

function getName(greeting, message) {
    return `${greeting} ${message} ${this.name}.`;
};

const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hello! I am Oliver.

exports.bind = bind;