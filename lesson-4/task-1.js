/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
const date = new Date();
const day = date.getDate();
person.salary = day < 10 ? "good salary" : 'bad salary';

person.salary; // good salary

exports.person = person;