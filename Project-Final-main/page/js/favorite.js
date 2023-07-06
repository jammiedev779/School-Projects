//create new class for favorite icon on click
const all_restaurant = localStorage.getItem("restaurantData") 
const all_restaurantData = JSON.parse(all_restaurant)



const myRestaurantName = document.querySelector(".content-left h2").innerText
let nameLowerCase = String(myRestaurantName).toLowerCase()
nameLowerCase = nameLowerCase.replaceAll(" ","")
nameLowerCase = nameLowerCase.replaceAll("-","")
let m
let n

for(let i=0 ; i<7 ; i++){
    for(let j=0 ; j<8 ; j++){
        let dataLowerCase = String(all_restaurantData[i][j][4]).toLowerCase()
        dataLowerCase = dataLowerCase.replaceAll(" ","")
        dataLowerCase = dataLowerCase.replaceAll("-","")
        if(nameLowerCase == dataLowerCase){
            m = i
            n = j
            break
        }
    }
}
// console.log(m,n)
// console.log(all_restaurantData[m][n][4])

let favIcon = document.querySelector(".favorite-icon")

const content_sign2  = document.querySelector(".content-sign2")
// content_sign2.addEventListener("mouseover",MouseOver)
// content_sign2.addEventListener("mouseout",MouseOut)
content_sign2.addEventListener("click",wrapData)


function MouseOver(){
    //let favIcon = document.querySelector(".favorite-icon")
    favIcon.setAttribute("icon","material-symbols:favorite")
    favIcon.style.color = "orange"
}
function MouseOut(){
    favIcon.setAttribute("icon","mdi:cards-heart-outline")
    favIcon.style.color = "black"
}
function wrapData(){
    if(favIcon.getAttribute("icon") == "mdi:cards-heart-outline"){
        favIcon.setAttribute("icon","material-symbols:favorite")
        favIcon.style.color = "orange"
        let dataSend = JSON.stringify(all_restaurantData[m][n])
        localStorage.setItem("dataFavorite",dataSend)
    }
    else{
        favIcon.setAttribute("icon","mdi:cards-heart-outline")
        favIcon.style.color = "black"
    }
}

 
