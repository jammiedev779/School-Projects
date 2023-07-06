let popupar_data = document.querySelector(".restaurant1")
let Bar_and_Rooftop_data = document.querySelector(".restaurant2")
let nearby_data = document.querySelector(".restaurant3")
let BLDserved_data = document.querySelector(".restaurant4")
let fast_food_data = document.querySelector(".restaurant5")
let chinese_data = document.querySelector(".restaurant6")
let buffet_data = document.querySelector(".restaurant7")
const restaurant_categories = []



restaurant_categories[0] = restaurant_data(popupar_data,8)
restaurant_categories[1] = restaurant_data(Bar_and_Rooftop_data,8)
restaurant_categories[2] = restaurant_data(nearby_data,8)
restaurant_categories[3] = restaurant_data(BLDserved_data,8)
restaurant_categories[4] = restaurant_data(fast_food_data,8)
restaurant_categories[5] = restaurant_data(chinese_data,8)
restaurant_categories[6] = restaurant_data(buffet_data,8)

const data = JSON.stringify(restaurant_categories)
localStorage.setItem("restaurantData",data)

function restaurant_data(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let link = menu.querySelector("a").href
        let img = menu.querySelector("img").src
        let name_link = menu.querySelector(".link_res")
            name_link = link
        let name = menu.querySelector(".name-restaurant").innerText
        let res_category = menu.querySelector(".span-popular").innerText
        let Time = menu.querySelector(".span-popular1").innerText
        restaurant[i-1] = [menu,link,img,name_link,name,res_category,Time]
    }
    return restaurant
}