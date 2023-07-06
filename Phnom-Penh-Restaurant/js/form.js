var lg=document.querySelector('.login')
var sg=document.querySelector('.signup')
var btn=document.querySelector('.btn')
var flg=document.querySelector('#formLogin')
var fsg=document.querySelector('#formSignup')

btn.style.left='0px'
flg.style.left='0px'
fsg.style.left='400px'
sg.addEventListener('click', function(){
    btn.style.left='190px'
    fsg.style.left='0px'
    flg.style.left='-400px'
})
lg.addEventListener('click', function(){
    btn.style.left='0px'
    flg.style.left='0px'
    fsg.style.left='400px'
})

