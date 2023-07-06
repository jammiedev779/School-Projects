
var dataReceive = localStorage.getItem("dataFavorite")
var wrap_dataReceive = JSON.parse(dataReceive)


let favoriteItems = document.querySelector(".favorite-items") 
let favContents = document.createElement("div")
favContents.classList.add("restaurants")
favoriteItems.append(favContents)

//var array_of_restaurants = [favContents]
create_restaurant(favContents,1)

function create_restaurant(restaurant,n){
    let create_recom = document.createElement("div")
    create_recom.classList.add("recom",`menu-${n}`)
    favContents.append(create_recom)
    let create_a1 = document.createElement("a")
    create_recom.append(create_a1)
    let create_img = document.createElement("img")
    create_a1.append(create_img)
    let create_res_title_and_status = document.createElement("div")
    create_res_title_and_status.classList.add("res-title-and-status")
    create_recom.append(create_res_title_and_status)
    let create_a2 = document.createElement("a")
    create_a2.classList.add("link_res")
    create_res_title_and_status.append(create_a2)
    let create_name_restaurant = document.createElement("div")
    create_name_restaurant.classList.add("name-restaurant")
    create_a2.append(create_name_restaurant)
    let br1 = document.createElement("br")
    let br2 = document.createElement("br")
    create_a2.append(br1)
    create_a2.append(br2)
    let create_span1 = document.createElement("span")
    let create_span2 = document.createElement("span")
    create_span1.classList.add("span-popular2","open")
    create_span2.classList.add("span-popular2","close")
    create_span1.innerText = "Open"
    create_span2.innerText = "Close"
    create_span2.style.display = "none"
    create_res_title_and_status.append(create_span1)
    create_res_title_and_status.append(create_span2)
    let create_footer_menu = document.createElement("div")
    create_footer_menu.classList.add("footer-menu")
    create_recom.append(create_footer_menu)
    let create_rating_star = document.createElement("div")
    create_rating_star.classList.add("ratingStar")
    create_footer_menu.append(create_rating_star)
    for(let i=0 ; i<5 ; i++){
        let tmp_span = document.createElement("span")
        create_rating_star.append(tmp_span)
        create_rating_star.lastChild.classList.add("fa","fa-star","checked")
    }
    let create_span_popular = document.createElement("span")
    create_span_popular.classList.add("span-popular")
    let create_span_popular1 = document.createElement("span")
    create_span_popular1.classList.add("span-popular1")
    create_footer_menu.append(create_span_popular)
    create_footer_menu.append(create_span_popular1)
    get_Data(favContents,n)
}



    function get_Data(restaurant,i){
            let menu = restaurant.querySelector(`.menu-${i}`)
            let link = menu.querySelector("a")
            let img = menu.querySelector("img")
            let name_link = menu.querySelector(".link_res")
            let name = menu.querySelector(".name-restaurant")
            let res_category = menu.querySelector(".span-popular")
            let Time = menu.querySelector(".span-popular1")
            modify(link,img,name_link,name,res_category,Time)
    }
    //modify contents
    function modify(link,img,name_link,name,res_category,Time){
        link.href = wrap_dataReceive[1]
        img.src = wrap_dataReceive[2]
        name_link = link
        name.innerText = wrap_dataReceive[4]
        res_category.innerText = wrap_dataReceive[5]
        Time.innerText = wrap_dataReceive[6]
    }
