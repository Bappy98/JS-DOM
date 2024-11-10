/**
 * -change the background color by generating random rgb color by clicking button
 */

window.onload = () =>{
    main()
}

function main() {
    const root = document.getElementById("root")
    const btn = document.getElementById('change-btn')
    const value = document.getElementById("input")
    const copyBtn = document.getElementById("copyBtn")

    btn.addEventListener('click', function() {
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor
        value.value = bgColor
    })
    copyBtn.addEventListener('click',function () {
        navigator.clipboard.writeText(value.value)
    })
}

function generateRGBColor() {
    const red = Math.floor(Math.random() *255)
    const green = Math.floor(Math.random() *255)
    const blue = Math.floor(Math.random() *255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}