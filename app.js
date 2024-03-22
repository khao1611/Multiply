let NumberInput = document.getElementById("Input-Number")
let Button = document.getElementById("click")
let Output = document.getElementById("output")

function multipy() {
    if (NumberInput.value.length > 7) {
        Output.innerHTML = "เอาให้แม่มึงคิดเถอะนะ"
        return
    }

    let Number1 = Number(NumberInput.value)
    let showoutput = ""

    if (Number1===0) {
        Output.innerHTML = "โปรดอย่ากวนตีนระบบ"
        return
    }

    for (let i = 1; i <= 12; i++) {
        showoutput += "<center><p>"
        showoutput += Number1 + " x " + i + " = " + (Number1*i)
        showoutput += "</p></center>"
    }

    Output.innerHTML = showoutput
}

Button.addEventListener("click", multipy)

let body = document.body
let changeTbutton = document.getElementById("Butt-The")

changeTbutton.addEventListener("click", () => {
    body.classList.toggle("Theme-dark")
})