// Метод Math.abs(x) возвращает абсолютное значение числа x,
// то есть его положительное значение, даже
// если x было отрицательным.

var num = -5;
var absNum = Math.abs(num);
console.log(absNum); // Вывод: 5
console.log(-absNum); // Вывод: -5

// Метод Math.ceil(x) округляет число x вверх до
// ближайшего большего целого числа.

var num2 = 4.3;
var ceilNum = Math.ceil(num2);
console.log(ceilNum); // Вывод: 5

// Метод Math.floor(x) округляет число
// x вниз до ближайшего меньшего целого числа.

var num3 = 4.8;
var floorNum = Math.floor(num3);
console.log(floorNum); // Вывод: 4

// Метод Math.max(x1, x2, ..., xn) принимает любое
// количество аргументов и возвращает
// наибольшее значение из них.

var maxNum = Math.max(10, 5, 8, 20, 3);
console.log(maxNum); // Вывод: 20

// Метод Math.min(x1, x2, ..., xn) принимает
// любое количество аргументов и возвращает
// наименьшее значение из них.

var minNum = Math.min(10, 5, 8, 20, 3);
console.log(minNum); // Вывод: 3

// Метод Math.pow(x, y) возводит число x в степень y.

var result = Math.pow(2, 3); // Возведение 2 в 3-ю степень
console.log(result); // Вывод: 8

// Метод Math.round(x) округляет число x
// до ближайшего целого числа.

var num4 = 4.6;
var roundedNum = Math.round(num4);
console.log(roundedNum); // Вывод: 5

// Метод Math.sqrt(x) вычисляет квадратный корень числа x.

var num5 = 25;
var sqrtNum = Math.sqrt(num5);
console.log(sqrtNum); // Вывод: 5

// Метод Math.random() возвращает псевдослучайное
// число в интервале от 0 (включительно) до 1 (исключительно).

var randomNum = Math.random();
console.log(randomNum); // Вывод: случайное число от 0 до 1

//получим рандомное число в диапазоне
var min = 50;
var max = 100;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);

//более просто (с нулём):

// var min = 0;
// var max = 100;
// var randomNumber = Math.floor(Math.random() * (max + 1));

// console.log(randomNumber);
