function createStyledElement(tag, styles) {
    var element = document.createElement(tag);
    Object.assign(element.style, styles);
    return element;
}

// Сопоставление операторов с символами
var operatorMap = {
    '1': '+',
    '2': '-',
    '3': '*',
    '4': '/'
};

// Получаем данные от пользователя с помощью prompt
var num1 = parseFloat(prompt("Введите первое число:"));
var operator = prompt("Введите оператор 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("Введите второе число:"));

// Проверяем корректность данных и создаем элементы
if (isNaN(num1) || isNaN(num2)) {
    alert("Пожалуйста, введите правильные числа.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("Пожалуйста, выберите правильный оператор (1, 2, 3 или 4).");
} else {
    // Создаем контейнер
    var container = createStyledElement('div', {
        backgroundColor: "#FFC107",
        padding: "20px",
        textAlign: "center",
        width: "300px",
        margin: "50px auto",
        borderRadius: "5px"
    });
    document.body.appendChild(container);

    // Блок с числами и оператором
    var equationContainer = createStyledElement('div', {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        color: "#000"
    });
    container.appendChild(equationContainer);

    // Первое число
    var num1Display = createStyledElement('div', {
        padding: "10px",
        backgroundColor: "#FFF",
        borderRadius: "5px"
    });
    num1Display.innerText = num1;
    equationContainer.appendChild(num1Display);

    // Оператор
    var operatorDisplay = createStyledElement('div', {
        padding: "10px",
        backgroundColor: "#FFF",
        borderRadius: "5px"
    });
    operatorDisplay.innerText = operatorMap[operator]; // Отображаем символ вместо числа
    equationContainer.appendChild(operatorDisplay);

    // Второе число
    var num2Display = createStyledElement('div', {
        padding: "10px",
        backgroundColor: "#FFF",
        borderRadius: "5px"
    });
    num2Display.innerText = num2;
    equationContainer.appendChild(num2Display);

    // Кнопка "Проверить"
    var button = createStyledElement('button', {
        backgroundColor: "#28A745",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginBottom: "20px"
    });
    button.innerText = "Проверить";
    container.appendChild(button);

    // Блок для результата
    var resultDisplay = createStyledElement('div', {
        padding: "10px",
        backgroundColor: "#DC3545",
        color: "white",
        borderRadius: "5px",
        fontSize: "18px",
        display: "none" // Скрываем до отображения результата
    });
    container.appendChild(resultDisplay);

    // Обработчик кнопки "Проверить"
    button.addEventListener('click', function() {
        var result;
        if (operator === '1') {
            result = num1 + num2;
        } else if (operator === '2') {
            result = num1 - num2;
        } else if (operator === '3') {
            result = num1 * num2;
        } else if (operator === '4') {
            if (num2 === 0) {
                alert("На ноль делить нельзя.");
                return;
            }
            result = num1 / num2;
        }

        resultDisplay.innerText = `Результат: ${result}`;
        resultDisplay.style.display = "block"; // Показываем результат
    });
}
// }
// 
