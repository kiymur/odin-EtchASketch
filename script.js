const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const i = document.createElement("div");
    i.classList.add("grid");
    i.style.width = "40px"
    container.appendChild(i);
}

function hover() {
    const grid = document.querySelectorAll(".grid");

    grid.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
    });
}

hover();

const gridSizeBtn = document.querySelector("#gridSize");
gridSizeBtn.addEventListener("click", (e) =>{
    let input = prompt("How many squares wide would you like the grid to be?");
    input = parseFloat(input);

    if (input > 100) {
        input = prompt("Please enter a number that is less than or equal to 100:")
    }
    container.innerHTML = '';

    let newWidth = ((672/input) - 2);
    newWidth = newWidth.toString() + "px";
        
    for (let i = 0; i < (input*input); i++) {
        const i = document.createElement("div");
        i.classList.add("grid");
        i.style.width = newWidth;
        container.appendChild(i);
    }

    hover();
});