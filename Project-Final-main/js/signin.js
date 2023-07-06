
let ld=document.querySelector('#loginData')
let eml=document.querySelector('#email')
let psw=document.querySelector('#password')
let ans=document.querySelector('#answer')
let remember=document.querySelector('#remember')
let sgd=document.querySelector('#signupData')
var myData=[]
if(!localStorage.rememberData){
    localStorage.rememberData=[]
}else{
    let reData=JSON.parse(localStorage.rememberData)
    eml.value=reData.email
    psw.value=reData.password
    delete localStorage.rememberData
}
fetch('https://script.google.com/macros/s/AKfycbx4mVyh9NAA_VZCFTfnhWhtpUy21IbxLbAUCq8MoIsMUjRLvqNHiMO5zpgpcKXjhGKh/exec',{method: 'GET'})
.then(res=>res.json()).then(data=>{

    for(var i=1;i<data.content.length;i++){
        let obj={firstname:'',lastname:'',email:'',password:''};
        obj.firstname=data.content[i][0];
        obj.lastname=data.content[i][1];
        obj.email=data.content[i][2];
        obj.password=data.content[i][3];
        myData[i-1]=obj
    }

    var bool=1;
    
    ld.addEventListener('click',function(){
        if(!localStorage.myDataSignUP){
            localStorage.myDataSignUP=[]
        }else{
            let dt=JSON.parse(localStorage.myDataSignUP)
            myData.push(dt)
            delete localStorage.myDataSignUP
        }
        for(let i=0;i<myData.length;i++){
           
            if(myData[i].email==eml.value&&myData[i].password==psw.value){
                localStorage.yourData=JSON.stringify(myData[i])
                if(!localStorage.url){
                    window.open('index.html','_parent')
                }else{
                    window.open(localStorage.url,'_parent')
                }

                if(remember.checked){
                    localStorage.rememberData=JSON.stringify(myData[i])
                    
                }
                bool=0;
                break;
            }
        }
        if(bool==1){
            window.alert('Something went wrong!')
        }
    })
})









