
var prePos=window.pageYOffset;
window.onscroll=function(){
    var newPos=window.pageYOffset;
    if(prePos>=newPos){
        document.querySelector('.header-bar').style.top="0";
    }else{
        if(prePos>200){
            document.querySelector('.header-bar').style.top="-127px"; 
            document.querySelector('#sms').style.display="none";
            k=0           
        }
    }
    prePos=newPos;
}
window.addEventListener('load',()=>{
    document.querySelector('.header-bar').style.top="0";
})
