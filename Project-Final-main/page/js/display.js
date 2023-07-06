let uname=document.querySelector('#username');
let umail=document.querySelector('#email');
let lb1=document.querySelector('.flabel1')
let lb2=document.querySelector('.flabel2')
if(!localStorage.yourData){
    uname.style.display="inline";
    umail.style.display="inline";
    lb1.style.display="inline";
    lb2.style.display="inline";
}else{
    uname.style.display="none";
    umail.style.display="none";
    lb1.style.display="none";
    lb2.style.display="none";
}