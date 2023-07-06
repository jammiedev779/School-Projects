var flg=document.querySelector('#formLogin')
var btn=document.querySelector('.btn')
var flg=document.querySelector('#formLogin')
var fsg=document.querySelector('#formSignup')
let myform=document.querySelector('#formSignup')
myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    fdata=new FormData(myform)
    let fpw=document.querySelector('#passwords')
    let fpws=document.querySelector('#repasswords')
    let chbox=document.getElementById('agree')
    let fname=document.getElementById('firstnames')
    let lname=document.getElementById('lasstnames')
    let email=document.getElementById('emails')
        
        if(fpw.value.length<8){
            alert('Password must less than 8 characters!')
        }else{
            if(fpw.value==fpws.value){
                if(chbox.checked){
                    fetch('https://script.google.com/macros/s/AKfycbxrG2lt0oVFNzR8RXeYyJWfaGimEkaaglcg1-HY2vFjRk6F6UeFt4Ge0U1JoPh9riQ1/exec',{method:'POST',body:fdata})   
                    let dataSignUp={'firstname':'','lastname':'','email':'','password':''}
                    dataSignUp.firstname=fname.value
                    dataSignUp.lastname=lname.value
                    dataSignUp.email=email.value
                    dataSignUp.password=fpw.value
                    btn.style.left='0px'
                    flg.style.left='0px'
                    fsg.style.left='400px'
                    fname.value=''
                    lname.value=''
                    email.value=''
                    fpw.value=''
                    fpws.value=''
                    chbox.checked=false
                    localStorage.myDataSignUP=JSON.stringify(dataSignUp)
                }else{
                    alert('You must agree!')
                }
            }else{
                alert('Password not match!');
            }        
        }        

    
})