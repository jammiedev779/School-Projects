
var width = screen.width;

const button1 = document.querySelector("#see-more-1").addEventListener("click",seeAll1)
const button2 = document.querySelector("#see-more-2").addEventListener("click",seeAll2)
const button3 = document.querySelector("#see-more-3").addEventListener("click",seeAll3)
const button4 = document.querySelector("#see-more-4").addEventListener("click",seeAll4)
const button5 = document.querySelector("#see-more-5").addEventListener("click",seeAll5)
const button6 = document.querySelector("#see-more-6").addEventListener("click",seeAll6)
const button7 = document.querySelector("#see-more-7").addEventListener("click",seeAll7)

const seeless1 = document.querySelector("#seeless1").addEventListener("click",seeLess1)
const seeless2 = document.querySelector("#seeless2").addEventListener("click",seeLess2)
const seeless3 = document.querySelector("#seeless3").addEventListener("click",seeLess3)
const seeless4 = document.querySelector("#seeless4").addEventListener("click",seeLess4)
const seeless5 = document.querySelector("#seeless5").addEventListener("click",seeLess5)
const seeless6 = document.querySelector("#seeless6").addEventListener("click",seeLess6)
const seeless7 = document.querySelector("#seeless7").addEventListener("click",seeLess7)
console.log(width)

function seeAll1(){
    style(1)
}
function seeLess1(){
    style_see_less(1)
}


function seeAll2(){
    style(2)
}
function seeLess2(){
    style_see_less(2)
}


function seeAll3(){
    style(3)
}
function seeLess3(){
    style_see_less(3)
}


function seeAll4(){
    style(4)
}
function seeLess4(){
    style_see_less(4)
}


function seeAll5(){
    style(5)
}
function seeLess5(){
    style_see_less(5)
}


function seeAll6(){
    style(6)
}
function seeLess6(){
    style_see_less(6)
}


function seeAll7(){
    style(7)
}
function seeLess7(){
    style_see_less(7)
}


function style(i){
    let contents = document.getElementsByClassName(`restaurant${i}`)
    let button = document.querySelector(`#see-more-${i}`)
        button.style.display = "none"
    let seeless = document.querySelector(`#seeless${i}`)
        seeless.style.display = "" 
        contents[0].style.flexWrap = "wrap"
        contents[0].style.overflowY = "auto"
        contents[0].style.height = "33.5rem"
    if(width <= 1000 || width>=768){
        contents[0].style.justifyContent = "center"
    }
}
function style_see_less(i){
    let contents = document.getElementsByClassName(`restaurant${i}`)
    let seeless = document.querySelector(`#seeless${i}`)
        seeless.style.display = "none" 
    let button = document.querySelector(`#see-more-${i}`)
        button.style.display = ""
        contents[0].style.flexWrap = "nowrap"
        //contents[0].style.overflowY = "auto"
        contents[0].style.height = "18.75rem"
    if(width <= 1000 || width>=768){
         contents[0].style.justifyContent = "start"
    }
}


