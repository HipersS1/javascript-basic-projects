const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const changeColorBtn = document.querySelector(".btn-hero")
changeColorBtn.addEventListener("click", changeColor)

function changeColor() {
    let selectedColor = getRandomColor()

    while (selectedColor === document.body.style.backgroundColor) {
        selectedColor = getRandomColor()
    }

    document.body.style.backgroundColor = selectedColor
    document.querySelector(".color").textContent = selectedColor
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}