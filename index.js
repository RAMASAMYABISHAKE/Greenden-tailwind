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