let container = document.getElementById("container");
let btn = document.createElement("button");
let body = document.getElementById("body");

document.body.insertBefore(btn, container);
btn.classList.add("button");
btn.innerHTML="Change grid size";

let defaultDomState = document.body.innerHTML;
const contWidth=960;

//original grid
let y=16;
for (i=0; i<y*y; i++)
{
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("box");
    //newDiv.style.opacity="0.1";
}

addEventListener("click", clackFn)
function clackFn(e)
{
    let y=1;
    if(e.target.classList=="button")
    {
        y=prompt("Enter a number between 0 and 100");
        while(y>100)
        {
            y=prompt("Enter a number between 0 and 100");
        }

        while (container.firstChild)
        {
            container.removeChild(container.firstChild);
        }

        for (i=0; i<y*y; i++)
        {
            let newDiv = document.createElement("div");
            container.appendChild(newDiv);
            newDiv.classList.add("box");
            let width=calcWidth(y);
            let height=calcWidth(y);
            newDiv.style.width=width+"px";
            newDiv.style.height=height+"px";
        }

    }
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
        if(+e.target.style.opacity<1)
        {
            x=+e.target.style.opacity;
            x+=0.1;
            e.target.style.opacity=x;
        } 
    }
}

function randomNumber()
{
    return Math.floor(Math.random()*255);
}

function calcWidth(num)
{
    //console.log(Math.ceil((1/num)*100));
    return (contWidth/num);

}
