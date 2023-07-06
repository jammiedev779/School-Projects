let ydata=JSON.parse(localStorage.yourData)
let yusername=document.querySelector('#username')
let yemail=document.querySelector('#email')

    yusername.value=ydata.firstname+' '+ydata.lastname
    yemail.value=ydata.email

var recom="<i class='fa fa-thumbs-up' aria-hidden='true'></i>Recommended"
var notrecom="<i class='fa fa-thumbs-down' aria-hidden='true'></i>Not recommended"
function commentTo(data){
    var stars
    var recomnots
    if(data.numStars==1){
        recomnots=notrecom
        stars = "<span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==2){
        recomnots=notrecom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==3){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==4){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star'></span>"
    }else if(data.numStars==5){
        recomnots=recom
        stars="<span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span>"
    }else{
        recomnots=notrecom
        stars = "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>"
    }
    var html="<div class='commented'><div class='topcomment'><img src='../image/user.png' width='40px'><label class='name'><label>"+data.name+"<br>"+data.email+"</label></label><label style='width:70px'><br>"+stars+"</label><label class='recomnot'><br><label>"+recomnots+"</label></label><label><br><label>"+data.current+"</label></label></div><div class='bottoncomment'>"+data.comment+"</div></div>"
    $('#getPost').append(html)
}
let tData=[]
function readData(){
    delete localStorage.Restaurant1
    fetch(commentAPI)
    .then(res=>res.json()).then(data=>{
        // console.log(data.content.length);
        document.querySelector('#numRecomment').innerHTML=data.content.length-1
        for(var i=1; i<data.content.length;i++){
            let getData={'name':'','email':'','numStars':0,'comment':'','current':''}
            getData.name=data.content[i][0]
            getData.email=data.content[i][1]
            getData.numStars=data.content[i][2]
            getData.comment=data.content[i][3]
            getData.current=data.content[i][4]
            tData[i-1]=getData
        }
     
        localStorage.Restaurant1=JSON.stringify(tData)
        document.querySelector('#getPost').innerHTML=''
        for(var j=tData.length-1;j>=0;j--) {
            commentTo(tData[j])
        }
    })
}
readData()
 setInterval(readData,5000)
function readStorage(){
    tData=JSON.parse(localStorage.Restaurant1)
    for(var j=tData.length-1;j>=0;j--) {
        commentTo(tData[j])
    }
}

var i=1;
$(document).ready(function() {
    var recom="<i class='fa fa-thumbs-up' aria-hidden='true'></i>Recommended"
    var notrecom="<i class='fa fa-thumbs-down' aria-hidden='true'></i>Not recommended"
    $('#star1').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=notrecom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'white';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
    })
    $('#star2').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=notrecom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
    })
    $('#star3').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
    })
    $('#star4').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'orange';
        document.querySelector('#star5').style.color = 'white';
    })
    $('#star5').click(function(){
        document.querySelector('#ratingRecomment').innerHTML=recom
        document.querySelector('#star1').style.color = 'orange';
        document.querySelector('#star2').style.color = 'orange';
        document.querySelector('#star3').style.color = 'orange';
        document.querySelector('#star4').style.color = 'orange';
        document.querySelector('#star5').style.color = 'orange';
    })


$('#post').click(function(){
    if($('#comment').val() != '') {
        if($('.numStars:checked').val()!=null){       
        if(i%2==0){
            document.querySelector('#logoRefresh').style.transform='rotate(-1000deg)'            
        }else{
            document.querySelector('#logoRefresh').style.transform='rotate(1000deg)'            
        }
        i++
        document.querySelector('#getPost').innerHTML=''
        //getCurrent time
        var currentDate=new Date();
        var day=currentDate.getDate();
        var month=currentDate.getMonth()+1;
        var year=currentDate.getFullYear();
        var hour=currentDate.getHours();
        var minute=currentDate.getMinutes();
        var second=currentDate.getSeconds();
        var current=hour+':'+minute+':'+second+' '+year+'/'+month+'/'+day+'  '

        let getData={'name':'','email':'','numStars':0,'comment':'','current':''}
        getData.name=$('#username').val()
        getData.email=$('#email').val()
        getData.numStars=$('.numStars:checked').val()
        getData.comment=$('#comment').val()
        getData.current=current+''
        tData.push(getData)
        localStorage.Restaurant1=JSON.stringify(tData)
        readStorage()
        // $('#username').val('')
        // $('#email').val('')
        // $('#comment').val('')            
        // $('#comment').val('')   
        document.querySelector('#numRecomment').innerHTML=tData.length
        document.querySelector('#star1').style.color = 'white';
        document.querySelector('#star2').style.color = 'white';
        document.querySelector('#star3').style.color = 'white';
        document.querySelector('#star4').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
        document.querySelector('#star5').style.color = 'white';
    }else{
        alert('Please rating star!')
    }
    }else{
        alert('Please complete the comment!')
    }
})
    $('#refresh').click(function(){
        $('#username').val('')
        $('#email').val('')
        $('#comment').val('')            
        $('#comment').val('')   
        if(i%2==0){
            document.querySelector('#logoRefresh').style.transform='rotate(-1000deg)'            
        }else{
            document.querySelector('#logoRefresh').style.transform='rotate(1000deg)'            
        }
        i++
        // document.querySelector('#getPost').innerHTML=''
        readData()
    })
})
