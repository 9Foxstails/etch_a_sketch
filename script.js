let container = document.getElementById("container");
document.createAttribute("class")

for (i=0; i<256; i++)
{
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("box");
}

addEventListener("mouseover", funnyFn)

function funnyFn(e)
{
    let r=randomNumber();
    let g=randomNumber();
    let b=randomNumber();
    let color="rgba("+r+", "+g+", "+b+")"

    if(e.target.classList=="box")
    {
        e.target.style.backgroundColor=color;
    }
    console.log(e.target)
}

function randomNumber()
{
    return Math.floor(Math.random()*255);
}

console.log(container);