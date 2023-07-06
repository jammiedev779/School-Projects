var buttonML3=document.querySelector('.see-more-3')
var buttonML33=document.querySelector('.see-more-33')
    buttonML3.style.color="red"
    buttonML33.style.color="red"
var hidden3=document.querySelector('.hide-3')
buttonML33.addEventListener('click',(e)=>{
    if(buttonML33.innerHTML=="see less"){
        hidden3.style.display="none"
        buttonML3.innerHTML="see all"
    }
})
buttonML3.addEventListener('click',(e)=>{
    if(buttonML3.innerHTML=="see all"){
        hidden3.style.display="inline"
        buttonML3.innerHTML="see less"
    }else{
        hidden3.style.display="none"
        buttonML3.innerHTML="see all"
    }
})