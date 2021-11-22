$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        1024:{
            items:3
        }
    }
})

const menu =document.querySelector(".menu")
const burgerMenu =document.querySelector(".burger")
const menuClose =menu.querySelector(".menu__close")

function handleOpenMenu() {
    menu.classList.add("active")
}

burgerMenu.addEventListener("click" , handleOpenMenu)
function handleCloseMenu() {
    menu.classList.remove("active")
}
menuClose.addEventListener("click" , handleCloseMenu)

// function toggleLanguage() {
//     const lngSelect =document.querySelector(".block01__lng-select")
//     const buttons =document.querySelectorAll(".block01__dropdown button")
//     for(let i =0; i < buttons.length; i++){
//         buttons[i].addEventListener('click', function () {
//         lngSelect.innerHTML = buttons[i].innerHTML 

//         })
//     }
    
// }
function toggleLanguage() {
    const lngSelect =document.querySelector(".block01__lng-select")
    const buttons =document.querySelector(".block01__dropdown ") 
  buttons.addEventListener("click", function (e) {
      lngSelect.innerHTML = e.target.value
  } )
}
 toggleLanguage()

 let person =["per", 12, true ]
for( i =0; i < person.length; i++){
if(i%2===0){console.log(i, person[i])}
}
let b=1;
if(b%2===0){console.log("even")}
else(console.log("odd"))