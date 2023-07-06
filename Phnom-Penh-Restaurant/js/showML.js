var buttonML1=document.querySelector('.see-more-1')
var buttonML11=document.querySelector('.see-more-11')
    buttonML1.style.color="red"
    buttonML11.style.color="red"
var hidden1=document.querySelector('.hide-1')
buttonML11.addEventListener('click',(e)=>{
    if(buttonML11.innerHTML=="see less"){
        hidden1.style.display="none"
        buttonML1.innerHTML="see all"
    }
})
buttonML1.addEventListener('click',(e)=>{
    if(buttonML1.innerHTML=="see all"){
        hidden1.style.display="inline"
        buttonML1.innerHTML="see less"
    }else{
        hidden1.style.display="none"
        buttonML1.innerHTML="see all"
    }
})