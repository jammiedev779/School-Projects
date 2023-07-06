var buttonML5=document.querySelector('.see-more-5')
var buttonML55=document.querySelector('.see-more-55')
    buttonML5.style.color="red"
    buttonML55.style.color="red"
var hidden5=document.querySelector('.hide-5')
buttonML55.addEventListener('click',(e)=>{
    if(buttonML55.innerHTML=="see less"){
        hidden5.style.display="none"
        buttonML5.innerHTML="see all"
    }
})
buttonML5.addEventListener('click',(e)=>{
    if(buttonML5.innerHTML=="see all"){
        hidden5.style.display="inline"
        buttonML5.innerHTML="see less"
    }else{
        hidden5.style.display="none"
        buttonML5.innerHTML="see all"
    }
})