const handleHour = document.querySelector('.hour')
const handleMin = document.querySelector('.min')
const handleSec = document.querySelector('.sec')
const moodSwitch = document.querySelector('.mode-switch')
const body = document.querySelector('body')

moodSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
    //console.log(body.classList);
    const isDarkMode = body.classList.contains('dark')
    moodSwitch.textContent = isDarkMode ? "Light Mode" : 'Dark Mode'
    
})

const updateTime = () =>{
    let date = new Date()
    let sec = (date.getSeconds()/60) *360;
    let min = (date.getMinutes()/60) *360
    let hour = (date.getHours()/12) *360

    handleSec.style.transform = `rotate(${sec}deg)`
    handleMin.style.transform = `rotate(${min}deg)`
    handleHour.style.transform = `rotate(${hour}deg)`
}

setInterval(updateTime,1000)