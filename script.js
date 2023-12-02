let request=document.querySelector("h5")

let btn=document.querySelector("#btn")

let check=0

btn.addEventListener("click",function(){

if(check==0){
    btn.innerHTML="Remove Friend"
    btn.style.backgroundColor="purple"
    request.style.color="green"
    request.innerHTML="Friends 😍"
    check=1
}

else{
    btn.innerHTML="Add Friend"
    btn.style.backgroundColor="rgb(0, 68, 255)"
    
    request.style.color="red"
    request.innerHTML="Stranger 😏"
check=0
}



})