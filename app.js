let newNav = document.getElementById("open")
let closeNav = document.getElementById("close")



newNav.addEventListener("click", function (){
    let features = "width=500, height=500";
    let myWin = window.open( "https://google.fr", '',);

    myWin.resizeBy(500, 600)
    myWin.moveBy(200, 200)
    myWin.moveTo(100, 50)
    window.resizeBy(-200, 0)
    myWin.close();
})

closeNav.addEventListener("click", function (){
    window.close();
})