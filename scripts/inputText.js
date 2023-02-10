function extractUrlId(){
    let url = textBox.value;
    let id = "";
    let counter = 0;

    for(let i = 0; i<url.length;i++){

        if(url[i] == "/"){
            counter++;
        }

        if(counter == 5){
            id +=url[i];
            

        }

    }

    return id.substring(1,id.length);

    //https://drive.google.com/file/d/1Jn3S96hTm0goTFKaBvXh6BJ6B_gpUGRt/view
}


function showImg(id){
    let img = document.querySelector("img");
    let filter = document.querySelector(".filter");
    let mainMenu = document.querySelector(".main-menu");
    let returnButton = document.querySelector(".return");
 

    img.src = "./assets/images/loading.gif";

    img.src = `https://drive.google.com/uc?export=view&id=${id}`;

    mainMenu.style.animation = "main-menu-up 1s forwards";
    mainMenu.style.setProperty("z-index","-10");
    filter.style.animation = "filter-darker 1s forwards";
    returnButton.style.animation = "return-down 0.7s forwards";
    img.style.animation = "image-down 0.7s forwards";

    img.onerror = ()=>{
        console.log("error");
        img.src = "./assets/images/error.png"
    }

}


let textBox = document.querySelector(".text-box");
let buttonAccept = document.querySelector(".accept");



buttonAccept.addEventListener("click",()=>{
    showImg(extractUrlId(textBox));


})

document.body.addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        showImg(extractUrlId(textBox));

    }

})
