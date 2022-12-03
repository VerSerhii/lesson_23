"use strict"

//Урок ПЕРШИЙ

//Варіант 1
// console.log('35' + -"22");

//Варіант 2
// console.log('35' * "22");

//Варіант 3
// console.log('558' > 22++);

//Варіант 4
// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);

//Варіант 5
// console.log(!false && 11 || 18 && !'');

//Варіант 6
// let name = 0;
// console.log(name ?? 'Без имени');


//Урок ДРУГИЙ

//Варіант 1
// if (1 === "1") {
//     console.log('Істина!');    
// } else {
//     console.log('Брехня!'); 
// };


//Варіант 2
// if (5 == "5") {
//     console.log('Істина!');    
// } else {
//     console.log('Брехня!'); 
// };

//Варіант 3
// let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Брехня!';
// console.log(message);

//Варіант 4
// if (0) {
//     console.log('Брехня!');
// } else if (' ') {
//     console.log('Істина!');
// };


//Урок ТРЕТІЙ

// Завдання №1
// let num = 1;
// while (num < 6) {
//     console.log(num);
//     num++;
// };

// Завдання №2
// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// };

// Завдання №3
// let num = 0;
// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;
// };

// Завдання №4
// firstFor: for (let num = 0; num < 2; num++) {       
//     for (let size = 0; size < 3; size++) {          
//         if (size == 2) {
//             break firstFor;    
//         }  
//         console.log(size);  
//     }        
// }

//Урок ЧЕТВЕРТИЙ

// Завдання №1
// let numOne = 1.005 + Number.EPSILON;
// let numTwo = Math.round(numOne * 100) / 100;
// console.log(numTwo);

// Завдання №2
// let value = parseFloat ("135.58px");
// console.log(value);

// Завдання №3
// let value = 58 + "Фрилансер";
// if (value) {
//     console.log('Результат виразу NaN');
// }

// Завдання №4
// let num = Math.max(10, 58, 39, -150, 0);
// console.log(num);

// Завдання №5
// let num = Math.floor(58.885);
// console.log(num);


//Урок П'ЯТИЙ

// Завдання №1
// let fls = "Фрілансер";
// let text = 'Привіт! Я ${fls}';
// console.log(text);

// Завдання №2
// let text = "фрілансер";
// let symbol = text[5];
// console.log(symbol);

// Завдання №3
// let text = 123 + "456";
// console.log(text);

// Завдання №4
// let text = "фрілансер";
// console.log(text.toUpperCase());

// Завдання №5
// let text = "фрілансер";
// console.log(text.slice(3, 6));

// Завдання №6
// let text = "фрілансер";
// console.log(text.includes('лан', 4));