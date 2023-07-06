document.querySelector('.f1').textContent='ALL'

const divsms=document.createElement('div');
if(!localStorage.yourData){
        localStorage.url=window.location.href
        document.querySelector('#forLogin').innerHTML = "<button class='login' id='wantLogin' onclick='goLoging()'><a>Log In</a></button>"
}else{
        
        let profileData=JSON.parse(localStorage.yourData);
        let username=profileData.firstname+' '+profileData.lastname
        divsms.id='sms'
        divsms.innerHTML=`<img src="image/letter.png" alt="" id="letter"><div id="info"><p>Name: ${username}</p><p>Email: ${profileData.email}</p><a href="" id="logout">Logout</a></div>`
        document.querySelector('#forLogin').innerHTML=`<img src="image/user1.png" class='yourname' width="50px">`
        document.querySelector('.menu-bar').appendChild(divsms)
}
let k=0
document.querySelector('.yourname').addEventListener('click',()=>{
    
    if(k==0){
        divsms.style.display='inline'  
        k=1     
    }else if(k==1){
        divsms.style.display='none' 
        k=0
    }

})
document.querySelector('#logout').addEventListener('click',()=>{
    delete localStorage.yourData
    window.location.reload()
})


