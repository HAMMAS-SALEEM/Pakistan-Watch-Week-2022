const burgerBtn = document.querySelector('.ham0')
const navMenu = document.querySelector('.nav_desktop')
const crossBtn = document.querySelector('.crossBtn')
const closeBtn = document.querySelectorAll('a.func_01')
const func02 = document.querySelectorAll('.func_02')
const func03 = document.querySelectorAll('.func_03')
const func04 = document.querySelectorAll('.func_04')

burgerBtn.addEventListener('click' , ()=>{
    console.log('Hammas')
    navMenu.style.visibility = "visible"
})

function hideMenu () {
    navMenu.style.visibility = "hidden"
}

crossBtn.addEventListener('click' , hideMenu)


