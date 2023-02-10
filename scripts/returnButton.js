function moveToUpImageMenu(){
    let img = document.querySelector(".image");
    let returnButton = document.querySelector(".return");
    let filter = document.querySelector(".filter");
    let mainMenu = document.querySelector(".main-menu")


    filter.style.animation = "filter-darker-reverse 1s forwards";
    returnButton.style.animation = "return-up 1s forwards";
    img.style.animation = "image-up 1s forwards"


    mainMenu.style.setProperty("z-index","10");
    mainMenu.style.animation = "main-menu-down 1s forwards";

    img.src = "./assets/images/loading.gif";

}


let returnButton = document.querySelector(".return");

returnButton.addEventListener("click",()=>{
    
    moveToUpImageMenu();


})

document.body.addEventListener("keyup",(event)=>{
    if(event.key == "ArrowUp"){
        moveToUpImageMenu();
    }

})