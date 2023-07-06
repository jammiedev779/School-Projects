//for add Name restraurant and url
const bodySeach=document.querySelector('.body-search')
const divSeachList=document.createElement('div')
divSeachList.className='list-search'
let subLink='https://davanncr.github.io/Project-Final/page/'
let popular=[
    {name:'Mealea',link:`${subLink}restaurant1`},
    {name:'Malis',link:`${subLink}restaurant2`},
    {name:'CUTS ROSEWOOD',link:`${subLink}CUTS`},
    {name:'Burgershack',link:`${subLink}Burger_Shack`},
    {name:'Deja Vu -The Garden Pub',link:`${subLink}Dejavu`},
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"Frist Time Buffet",link:`${subLink}FirstTimeBuffet`},
]//1
let breakfast=[
    {name:'Malis',link:`${subLink}restaurant2`},
    {name:'CUTS ROSEWOOD',link:`${subLink}CUTS`},
    {name:'Deja Vu -The Garden Pub',link:`${subLink}Dejavu`},
    {name:'Burgershack',link:`${subLink}Burger_Shack`},
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
]//2
let lunch=[
    {name:'LunchTimeBuffet',link:`${subLink}LunchTimeBuffet`},
    {name:'La Pergola',link:`${subLink}La_Pergola`},
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"Banh Chhav Ela",link:`${subLink}Banh_Chhav_Ela`},
    {name:"Burger Shack",link:`${subLink}Burger_Shack`},
    {name:"Carl's Jr. Cambodia",link:`${subLink}Carl'sJ`},
    {name:"Champei Garden",link:`${subLink}Champei_Garden`},
    {name:"CUTS ROSEWOOD",link:`${subLink}CUTS`},
]//3
let dinner=[
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"Juniper Gin",link:`${subLink}Juniper_Gin`},
    {name:"KFC",link:`${subLink}KFC`},
    {name:"Khema La Poste",link:`${subLink}Khema_La_Poste`},
    {name:"Kroeung Garden",link:`${subLink}Kroeung_Garden`},
    {name:"KYO Wagyu Omakase",link:`${subLink}Kyowagyuomakase`},
    {name:"La Pergola",link:`${subLink}La_Pergola`},
    {name:"Le Moon Rooftop",link:`${subLink}Le_Moon_Rooftop`},
    {name:"Le Royal",link:`${subLink}Le_Royal`},

]//4
let fastfood=[
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"Le Royal",link:`${subLink}Le_Royal`},
    {name:"Louisiana",link:`${subLink}Louisiana`},
    {name:"LunchTimeBuffet",link:`${subLink}LunchTimeBuffet`},
    {name:"Meatophum",link:`${subLink}Meatophum`},
    {name:"Metro Azura",link:`${subLink}Metro_Azura`},
    {name:"Ming Palace",link:`${subLink}Ming_Palace`},
    {name:"Namaste Indian",link:`${subLink}Namaste_Indian`},
    {name:"NatureDermPring",link:`${subLink}NatureDermPring`},
    {name:"Oishi Buffet",link:`${subLink}Oishi_Buffet`},
    {name:"OneMore",link:`${subLink}OneMore`},
    {name:"ParkCafe",link:`${subLink}ParkCafe`},

]//5
let chineseAndJapanese=[
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"YiSang",link:`${subLink}YiSang`},
    {name:"Zhan Liang Chinese",link:`${subLink}Zhan_Liang_Chinese`},
    {name:"Oishi Buffet",link:`${subLink}Oishi_Buffet`},
    {name:"IZA Japanese",link:`${subLink}Iza_Japanese`},
    {name:"Sakura Buffet",link:`${subLink}Sakura_Buffet`},
]//6
let nearly=[
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:"Le Royal",link:`${subLink}Le_Royal`},
    {name:"Louisiana",link:`${subLink}Louisiana`},
    {name:"Lunch Time Buffet",link:`${subLink}LunchTimeBuffet`},
    {name:"Meatophum",link:`${subLink}Meatophum`},
    {name:"Metro Azura",link:`${subLink}Metro_Azura`},
    {name:"Ming Palace",link:`${subLink}Ming_Palace`},
    {name:"Namaste Indian",link:`${subLink}Namaste_Indian`},
    {name:"NatureDermPring",link:`${subLink}NatureDermPring`},
    {name:"Oishi Buffet",link:`${subLink}Oishi_Buffet`},
]//7
let barAndRooftop=[
    {name:'KYO Wagyu Omakase',link:`${subLink}Kyowagyuomakase`},
    {name:'Deja Vo -The Garden Club',link:`${subLink}Dejavu`},
    {name:"Digby's Bar and Grill",link:`${subLink}Digby`},
    {name:'Burgershark',link:`${subLink}Burger_Shack`},
    {name:'Eclipse Sky Bar',link:`${subLink}Eclipse_Sky_bar`},
    {name:'FiveFive Rooftop',link:`${subLink}FiveFive`},
    {name:'Le moon Rooftop',link:`${subLink}Le_Moon_Rooftop`},
    {name:'Juniper Gin',link:`${subLink}Juniper_Gin`},
]//8
let bufet=[
    {name:'First Time Buffet',link:`${subLink}FirstTimeBuffet`},
    {name:'Oishi Buffet Sukisoup & BBQ',link:`${subLink}`},
    {name:'HaNa Buffet BBBQ&Sukisoup',link:`${subLink}Oishi_Buffet`},
    {name:'Lunch Time',link:`${subLink}LunchTimeBuffet`},
    {name:"Sakura Buffet",link:`${subLink}Sakura_Buffet`},
    {name:"OneMore",link:`${subLink}OneMore`},
]//9
let popularCode=''
let lunchCode=''
let breakfastCode=''
let dinnerCode=''
let fastfoodCode=''
let chineseAndJapaneseCode=''
let nearlyCode=''
let barAndRooftopCode=''
let bufetCode=''
let codeString=''
popular.forEach(data=>{
    popularCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
breakfast.forEach(data=>{
    breakfastCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
lunch.forEach(data=>{
    lunchCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
dinner.forEach(data=>{
    dinnerCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
fastfood.forEach(data=>{
    fastfoodCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
chineseAndJapanese.forEach(data=>{
    chineseAndJapaneseCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
nearly.forEach(data=>{
    nearlyCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})

barAndRooftop.forEach(data=>{
    barAndRooftopCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
bufet.forEach(data=>{
    bufetCode+=`<a href='${data.link}'><li>${data.name}</li></a>`
})

let codeJSON=[
    {name:"Banh Chhav Ela",link:`${subLink}Banh_Chhav_Ela`},
    {name:"Burger Shack",link:`${subLink}Burger_Shack`},
    {name:"Carl's Jr. Cambodia",link:`${subLink}Carl'sJ`},
    {name:"Champei Garden",link:`${subLink}Champei_Garden`},
    {name:"CUTS ROSEWOOD",link:`${subLink}CUTS`},
    {name:"DavidsNoodle",link:`${subLink}DavidsNoodle`},
    {name:"Deja vu -The Garden Pub",link:`${subLink}Dejavu`},
    {name:"Digby's Bar and Grill",link:`${subLink}Digby`},
    {name:"Eclipse Sky_bar",link:`${subLink}Eclipse_Sky_bar`},
    {name:"Elevent One",link:`${subLink}Elevent_One`},
    {name:"Emperors China",link:`${subLink}Emperors_China`},
    {name:"FarmToTable",link:`${subLink}FarmToTable`},
    {name:"First Time Buffet",link:`${subLink}FirstTimeBuffet`},
    {name:"FiveFive Rooftop Restaurant & Bar",link:`${subLink}FiveFive`},
    {name:"Hana Buffet",link:`${subLink}Hana_Buffet`},
    {name:"IZA Japanese",link:`${subLink}Iza_Japanese`},
    {name:"Juniper Gin",link:`${subLink}Juniper_Gin`},
    {name:"KFC",link:`${subLink}KFC`},
    {name:"Khema La Poste",link:`${subLink}Khema_La_Poste`},
    {name:"Kroeung Garden",link:`${subLink}Kroeung_Garden`},
    {name:"KYO Wagyu Omakase",link:`${subLink}Kyowagyuomakase`},
    {name:"La Pergola",link:`${subLink}La_Pergola`},
    {name:"Le Moon Rooftop",link:`${subLink}Le_Moon_Rooftop`},
    {name:"Le Royal",link:`${subLink}Le_Royal`},
    {name:"Louisiana",link:`${subLink}Louisiana`},
    {name:"Lunch Time Buffet",link:`${subLink}LunchTimeBuffet`},
    {name:"Meatophum",link:`${subLink}Meatophum`},
    {name:"Metro Azura",link:`${subLink}Metro_Azura`},
    {name:"Ming Palace",link:`${subLink}Ming_Palace`},
    {name:"Namaste Indian",link:`${subLink}Namaste_Indian`},
    {name:"NatureDermPring",link:`${subLink}NatureDermPring`},
    {name:"Oishi Buffet",link:`${subLink}Oishi_Buffet`},
    {name:"OneMore",link:`${subLink}OneMore`},
    {name:"ParkCafe",link:`${subLink}ParkCafe`},
    {name:"Pinocchio",link:`${subLink}Pinocchio`},
    {name:"PtesByKhmer",link:`${subLink}PtesByKhmer`},
    {name:"Red_Bar",link:`${subLink}Red_Bar`},
    {name:"Mealea Restaurant",link:`${subLink}restaurant1`},
    {name:"Malis Restaurant",link:`${subLink}restaurant2`},
    {name:"Sakura Buffet",link:`${subLink}Sakura_Buffet`},
    {name:"Sundown Social_Club",link:`${subLink}Sundown_Social_Club`},
    {name:"Terraza",link:`${subLink}Terraza`},
    {name:"YiSang",link:`${subLink}YiSang`},
    {name:"Zhan Liang Chinese",link:`${subLink}Zhan_Liang_Chinese`},
]
codeJSON.forEach(data=>{
    codeString+=`<a href='${data.link}'><li>${data.name}</li></a>`
})
divSeachList.innerHTML=codeString
bodySeach.appendChild(divSeachList)

let filterID=document.querySelector('#filter')
filterID.addEventListener('change',(e)=>{
    let index=filterID.selectedIndex
    if(index==1){
        divSeachList.innerHTML=popularCode
    }else if(index==2){
        divSeachList.innerHTML=breakfastCode
    }else if(index==3){
        divSeachList.innerHTML=lunchCode
    }else if(index==4){
        divSeachList.innerHTML=dinnerCode
    }else if(index==5){
        divSeachList.innerHTML=fastfoodCode
    }else if(index==6){
        divSeachList.innerHTML=chineseCode
    }else if(index==7){
        divSeachList.innerHTML=nearlyCode
    }else if(index==8){
        divSeachList.innerHTML=barAndRooftopCode
    }else if(index==9){
        divSeachList.innerHTML=bufetCode
    }else{
        divSeachList.innerHTML=codeString
    }
    document.querySelector('#search-bar').value=''
})
document.querySelector('#search-bar').value=''
//for searching
const searchList=document.querySelector('.list-search')
const search=document.querySelector('#search-bar')
searchList.children[1].style.display="none"
search.addEventListener('keyup',(e)=>{
    let h=0
    let keyword=e.target.value.toLowerCase()
    let list=searchList.children
    if(keyword==''||keyword==' '){
        searchList.style.display="none"
        search.value=''
    }else{
        searchList.style.display="inline"
    }
    for(let i=0;i<list.length;i++){
        let word=list[i].textContent.toLowerCase()
        if(word.indexOf(keyword)>=0&&h<10){
            list[i].style.display="inline"
            h=h+1
        }else{
            list[i].style.display="none"
        }
    }
})
setInterval(function(){
    if(search.value==''){
        searchList.style.display="none"
    }
},0)
document.addEventListener('click',(e)=>{
    if(search==e.target&&search.value!=''){
        searchList.style.display="inline"
    }else{
        searchList.style.display="none"
    }
})
