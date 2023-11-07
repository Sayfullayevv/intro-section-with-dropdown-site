// First Dropdown
let ft = document.querySelector(".ft")
let dropdwn = document.querySelector(".ft ul")
let arrow = document.getElementById('arrow')

ft.addEventListener("mouseenter" , ()=>{
    dropdwn.style.display = 'block'
    arrow.src = './images/icon-arrow-up.svg'
})

ft.addEventListener("mouseleave" , ()=>{
    dropdwn.style.display = 'none'
    arrow.src = './images/icon-arrow-down.svg'
})
// Second Dropdown
let sc = document.querySelector(".sc")
let dropdwn1 = document.querySelector(".sc ul")
let arrsc = document.querySelector(".sc #arrow")

sc.addEventListener("mouseenter" , ()=>{
    dropdwn1.style.display = 'block'
    arrsc.src = './images/icon-arrow-up.svg'
})

sc.addEventListener("mouseleave" , ()=>{
    dropdwn1.style.display = 'none'
    arrsc.src = './images/icon-arrow-down.svg'
})


let black_back = document.querySelector(".black-back")
let close_menu = document.getElementById("close-menu")
close_menu.style.cursor = 'pointer'
let mob_menu = document.getElementById("mob-menu")
mob_menu.style.cursor = 'pointer'

mob_menu.addEventListener("click" , ()=>{
    black_back.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

close_menu.addEventListener("click" , ()=>{
    black_back.style.display = 'none'
    document.body.style.overflow = 'scroll'
})


let menu_links_ft = document.querySelector(".menu__links .ft")
let menu_links_arrow = document.querySelector(".menu__links .ft #arrow")
let menu_links_drdwn = document.querySelector(".dwnm")

menu_links_ft.addEventListener("click" , ()=>{
    let state = menu_links_drdwn.classList.toggle('active')
    if(state){
        menu_links_arrow.src = './images/icon-arrow-up.svg'
    }
    else{
        menu_links_arrow.src = './images/icon-arrow-down.svg'
    }
})

let menu_links_sc = document.querySelector(".menu__links .sc")
let menu_links_arrow_sc = document.querySelector(".menu__links .sc #arrow")
let menu_links_drdwn_sc = document.querySelector(".sc .dwnm")


menu_links_sc.addEventListener("click" , ()=>{
    let state = menu_links_drdwn_sc.classList.toggle('active')
    if(state){
        menu_links_arrow_sc.src = './images/icon-arrow-up.svg'
    }
    else{
        menu_links_arrow_sc.src = './images/icon-arrow-down.svg'
    }
})
