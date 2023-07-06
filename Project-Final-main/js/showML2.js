var buttonML2=document.querySelector('.see-more-2')
var buttonML22=document.querySelector('.see-more-22')
    buttonML2.style.color="red"
    buttonML22.style.color="red"
var hidden2=document.querySelector('.hide-2')
buttonML22.addEventListener('click',(e)=>{
    if(buttonML22.innerHTML=="see less"){
        hidden2.style.display="none"
        buttonML2.innerHTML="see all"
    }
})
buttonML2.addEventListener('click',(e)=>{
    if(buttonML2.innerHTML=="see all"){
        hidden2.style.display="inline"
        buttonML2.innerHTML="see less"
    }else{
        hidden2.style.display="none"
        buttonML2.innerHTML="see all"
    }
})