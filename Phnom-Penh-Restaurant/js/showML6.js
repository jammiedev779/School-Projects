var buttonML6=document.querySelector('.see-more-6')
var buttonML66=document.querySelector('.see-more-66')
    buttonML6.style.color="red"
    buttonML66.style.color="red"
var hidden6=document.querySelector('.hide-6')
buttonML66.addEventListener('click',(e)=>{
    if(buttonML66.innerHTML=="see less"){
        hidden6.style.display="none"
        buttonML6.innerHTML="see all"
    }
})
buttonML6.addEventListener('click',(e)=>{
    if(buttonML6.innerHTML=="see all"){
        hidden6.style.display="inline"
        buttonML6.innerHTML="see less"
    }else{
        hidden6.style.display="none"
        buttonML6.innerHTML="see all"
    }
})