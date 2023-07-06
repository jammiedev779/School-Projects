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

const recommented_check = document.querySelector(".restaurant0")
const popular_check = document.querySelector(".restaurant1")
const BR_check = document.querySelector(".restaurant2")
const nearby_check = document.querySelector(".restaurant3")
const BLDS_check = document.querySelector(".restaurant4")
const fastfood_check = document.querySelector(".restaurant5")
const chinese_check = document.querySelector(".restaurant6")
const buffet_check = document.querySelector(".restaurant7")

check_restaurant(recommented_check,10)
check_restaurant(popular_check,8)
check_restaurant(BR_check,8)
check_restaurant(nearby_check,8)
check_restaurant(BLDS_check,8)
check_restaurant(fastfood_check,8)
check_restaurant(chinese_check,8)
check_restaurant(buffet_check,8)

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


