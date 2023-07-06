//just to change the placeholder of the search bar when device max-width is 470px
var width = screen.width;
const placeholder = document.querySelector("#search-bar")
if(width <= 470){
    placeholder.setAttribute("placeholder","search...")
    console.log(width)
}
else{
    placeholder.setAttribute("placeholder","Search for any Restaurant")
}

//hover effect
const recomment_hover = document.querySelector(".restaurant0")
const popular_hover = document.querySelector(".restaurant1")
const BR_hover = document.querySelector(".restaurant2")
const nearby_hover = document.querySelector(".restaurant3")
const BLDS_hover = document.querySelector(".restaurant4")
const fastfood_hover = document.querySelector(".restaurant5")
const chinese_hover = document.querySelector(".restaurant6")
const buffet_hover = document.querySelector(".restaurant7")

menu_hover(recomment_hover,10)
menu_hover(popular_hover,8)
menu_hover(BR_hover,8)
menu_hover(nearby_hover,8)
menu_hover(BLDS_hover,8)
menu_hover(fastfood_hover,8)
menu_hover(chinese_hover,8)
menu_hover(buffet_hover,8)

function menu_hover(restaurant,n){
    for(let i = 1 ; i<=n ; i++){
        let categories = restaurant.querySelector(`.menu-${i}`)
        let category = categories.querySelector(".span-popular").innerText
        categories.addEventListener("mouseover",mousehover(categories,category))
    }
    
}

function mousehover(categories,category){
    categories.style.setProperty("--my-content",`"${category}"`)
}