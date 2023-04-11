const text = `How you look at it is pretty much how you'll see it`;
let div = document.createElement("div");
div.className = "div";
document.body.appendChild(div);


let index = 0;
function typing(){
    div.innerHTML = text.slice(0, index)
    index++;
    if (index > text.length) {
        index = 0

    }
}

setInterval(typing, 100);





