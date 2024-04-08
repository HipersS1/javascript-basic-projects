const buttons = document.querySelectorAll(".btn")
const counter = document.querySelector("#value")

buttons.forEach(btn => btn.addEventListener("click", function (e) {
    const btnStyles = e.currentTarget.classList

    if (btnStyles.contains("decrease"))
        decreaseCounter()

    if (btnStyles.contains("increase"))
        increaseCounter()

    if (btnStyles.contains("reset"))
        resetCounter()

    changeColorBaseOnValue()
}))


function increaseCounter() {
    counter.textContent = Number(counter.textContent) + 1
}

function decreaseCounter() {
    counter.textContent = Number(counter.textContent) - 1
}

function resetCounter() {
    counter.textContent = 0
}

function changeColorBaseOnValue() {
    const counterValue = Number(counter.textContent)

    if (counterValue > 0)
        counter.style.color = "green"
    else if (counterValue < 0)
        counter.style.color = "red"
    else
        counter.style.color = "black"
}
