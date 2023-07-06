var realTime
var currentHour
var currentMinute
const getCurrentTimeDate = () => {
        let currentTimeDate = new Date();
        var hours   =  currentTimeDate.getHours();

        var minutes =  currentTimeDate.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;


        if(hours === 24){
            hours=24;
        }else{
            hours = hours%24;
        }

        currentHour = hours
        currentMinute = minutes
        setTimeout(getCurrentTimeDate, 500);

    }
    getCurrentTimeDate();
    realTime = `${currentHour}:${currentMinute}`;



const takeData = localStorage.getItem("restaurantData")
const map_nearby_data = JSON.parse(takeData)
let b = Math.floor(Math.random()*7) //random category

const nearby_map = document.querySelector(".nearby")
get_Data_map_res(nearby_map,8)
menu_hover(nearby_map,8)
check_restaurant(nearby_map,8)

//change contents
function get_Data_map_res(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let link = menu.querySelector("a")
        let img = menu.querySelector("img")
        let name_link = menu.querySelector(".link_res")
        let name = menu.querySelector(".name-restaurant")
        let res_category = menu.querySelector(".span-popular")
        let Time = menu.querySelector(".span-popular1")
        modify_for_map_res(menu,link,img,name_link,name,res_category,Time,i-1)
    }

}
//modify contents
function modify_for_map_res(menu,link,img,name_link,name,res_category,Time,i){
    link.href = map_nearby_data[b][i][1]
    img.src = map_nearby_data[b][i][2]
    name_link = link
    name.innerText = map_nearby_data[b][i][4]
    res_category.innerText = map_nearby_data[b][i][5]
    Time.innerText = map_nearby_data[b][i][6]
}


//hover functions
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


//time functions
function check_restaurant(restaurant,n){
    for(let i=1 ; i<=n ; i++){
        let menu = restaurant.querySelector(`.menu-${i}`)
        let open_time = menu.querySelector(".span-popular1").innerText
        result = compare_time(open_time,realTime)
        if (result == true){
            let close = menu.querySelector(".close")
            close.style.display = ""
            close.style.color = "red"
            let open = menu.querySelector(".open")
            open.style.display = "none"
        }
        else{
            let open = menu.querySelector(".open")
            open.style.display = ""
            let close = menu.querySelector(".close")
            close.style.display = "none"
        }
    }
}

function compare_time(open_time,realTime) {
    let result
    let array_time = open_time.split("-")
    let am = array_time[0].split(":")
    let pm = array_time[1].split(":")
    let num_am = Number(am[0])
    let num_pm = Number(pm[0])
    if (num_am == 12 && num_pm == 12) result = false
    else {
        if(currentHour <= 12){

            if (currentHour-num_am >= 0) {
                result = false
            }
            else {
                result = true
            }
        }
        else{
            currentHour-=12
            if (currentHour-num_pm <= 0){
                result = false
            }
            else if(currentHour-num_pm > 0) {
                result = true
            }
            currentHour+=12
        }
    }
    return result
}