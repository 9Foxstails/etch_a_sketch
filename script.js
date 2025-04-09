let container = document.getElementById("container");
document.createAttribute("class")



for (i=0; i<256; i++)
{
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("box");
}

console.log(container);