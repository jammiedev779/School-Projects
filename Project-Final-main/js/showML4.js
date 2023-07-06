var buttonML4=document.querySelector('.see-more-4')
var buttonML44=document.querySelector('.see-more-44')
    buttonML4.style.color="red"
    buttonML44.style.color="red"
var hidden4=document.querySelector('.hide-4')
buttonML44.addEventListener('click',(e)=>{
    if(buttonML44.innerHTML=="see less"){
        hidden4.style.display="none"
        buttonML4.innerHTML="see all"
    }
})
buttonML4.addEventListener('click',(e)=>{
    if(buttonML4.innerHTML=="see all"){
        hidden4.style.display="inline"
        buttonML4.innerHTML="see less"
    }else{
        hidden4.style.display="none"
        buttonML4.innerHTML="see all"
    }
})