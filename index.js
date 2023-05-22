//Getting all the button attributes
const btns = document.querySelectorAll('button')
//Accesing display board
const display = document.getElementById('display')
//Running a loop for that checks for every button
btns.forEach(function (btn) {
    //calls the function when the button is clicked
    btn.addEventListener('click', function (e) {
        const data = e.currentTarget.id;
        //Running a loop for buttons that consists of all numbers
        for (i = 0; i <= 9; i++) {
            if (data == `button${i}`) {
                display.value += i
            }
        }
        if (data == "addButton") {
            display.value += "+"
        }
        else if (data == "subtractButton") {
            display.value += "-"
        }
        else if (data == "multiplyButton") {
            display.value += "*"
        }
        else if (data == "divideButton") {
            display.value += "/"
        }
        //using eval to display result when the equals buton is clicked
        else if (data == "equalsButton") {
            display.value = eval(display.value)
        }
        //clears the display
        else if (data == "clearButton") {
            display.value = ""
        }
    })
})