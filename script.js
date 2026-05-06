const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const i = document.createElement("div");
    i.classList.add("grid");
    container.appendChild(i);
}

const grid = document.querySelectorAll(".grid");

grid.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    });
});
