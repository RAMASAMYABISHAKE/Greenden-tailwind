//selecting side nav bar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var sidetext = document.getElementById("side-text")
//

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})
sidetext.addEventListener("click",function(){
    sidenav.style.right = "-50%"
    
})

var search = document.getElementById("search")
var container = document.getElementById("container")
var divlist = container.querySelectorAll("div")

search.addEventListener("keyup",function(){
var enteredvalue = event.target.value.toUpperCase()


for(count=0 ; count<divlist.length ; count = count+1){
var productname = divlist[count].querySelector("h1").textContent

    if(productname.toUpperCase().indexOf(enteredvalue)<0){
divlist[count].style.display = "none"
}
else{
    divlist[count].style.display= "block"
}
}})