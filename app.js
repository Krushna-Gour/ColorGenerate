let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let randomColor = getColor();
    h1.innerText = `rgb (${randomColor})`;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = `rgb(${randomColor})`;
    console.log("color updated");
});

function getColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color=`${red }, ${green}, ${blue}`;
    console.log(color);   // 161, 193, 59 
    return color;
}


