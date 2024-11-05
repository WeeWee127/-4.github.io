// 1. Hello World
console.log("Привіт, Світ!");

// 2. Калькулятор суми
function calculateSum() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let sum = num1 + num2;
    alert("Сума чисел: " + sum);
}

// 3. Перевірка на парне/непарне
function checkEvenOdd() {
    let number = parseInt(prompt("Введіть число:"));
    if (number % 2 === 0) {
        alert("Число " + number + " є парним");
    } else {
        alert("Число " + number + " є непарним");
    }
}

// 4. Таблиця множення
function multiplicationTable() {
    let number = parseInt(prompt("Введіть число:"));
    let table = "";
    
    for(let i = 1; i <= 10; i++) {
        table += number + " × " + i + " = " + (number * i) + "\n";
    }
    
    console.log(table);
    alert(table);
}

// 5. Сортування масиву
function sortNumbers() {
    let numbers = [5, 2, 9, 1, 7, 6, 3];
    let sortedNumbers = numbers.sort((a, b) => a - b);
    
    console.log("Початковий масив:", numbers);
    console.log("Відсортований масив:", sortedNumbers);
}

// 6. Факторіал числа (рекурсія)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function calculateFactorial() {
    let number = parseInt(prompt("Введіть число для обчислення факторіалу:"));
    console.log(`Факторіал числа ${number} = ${factorial(number)}`);
}

// 7. Об'єкт користувача
let user = {
    імя: "Іван",
    вік: 30,
    місто: "Київ"
};

function showUserInfo() {
    console.log("Інформація про користувача:");
    console.log(`Ім'я: ${user.імя}`);
    console.log(`Вік: ${user.вік}`);
    console.log(`Місто: ${user.місто}`);
}

// 8. Перевірка паліндрому
function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function checkPalindrome() {
    let text = prompt("Введіть текст для перевірки на паліндром:");
    if (isPalindrome(text)) {
        alert("Це паліндром!");
    } else {
        alert("Це не паліндром!");
    }
}

// 9. Лічильник кліків
let clicks = 0;

function countClicks() {
    clicks++;
    console.log(`Кількість кліків: ${clicks}`);
}

// 10. Завантаження даних з API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Отримані дані:', data);
    } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
    }
}

// Функція для тестування всіх завдань
function testAll() {
    console.log("Тестування всіх функцій:");
    
    // 1. Hello World
    console.log("\n1. Hello World:");
    console.log("Привіт, Світ!");
    
    // 2. Калькулятор суми
    console.log("\n2. Калькулятор суми:");
    calculateSum();
    
    // 3. Перевірка на парне/непарне
    console.log("\n3. Перевірка на парне/непарне:");
    checkEvenOdd();
    
    // 4. Таблиця множення
    console.log("\n4. Таблиця множення:");
    multiplicationTable();
    
    // 5. Сортування масиву
    console.log("\n5. Сортування масиву:");
    sortNumbers();
    
    // 6. Факторіал
    console.log("\n6. Факторіал:");
    calculateFactorial();
    
    // 7. Інформація про користувача
    console.log("\n7. Інформація про користувача:");
    showUserInfo();
    
    // 8. Перевірка паліндрому
    console.log("\n8. Перевірка паліндрому:");
    checkPalindrome();
    
    // 9. Лічильник кліків
    console.log("\n9. Лічильник кліків:");
    countClicks();
    
    // 10. Завантаження даних
    console.log("\n10. Завантаження даних:");
    fetchData();
}

// Для запуску всіх тестів викличте:
// testAll();