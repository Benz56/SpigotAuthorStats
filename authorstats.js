const isProfilePage = window.location.href.includes("members");
const element = document.querySelector(isProfilePage ? "#ProfilePanes" : ".mainContent");

const table = document.createElement("div");
table.innerHTML = statsTable;
table.querySelector("#author").innerHTML += isProfilePage ? document.querySelector(".style18").textContent : element.querySelector(".titleBar").textContent.split(" ")[2];
console.log(isProfilePage);
let isLoaded = false;
if (isProfilePage) {
    document.querySelectorAll(".Tabs li").forEach(value => {
            value.addEventListener("mouseup", function () {
                if (value.textContent === "Resources") {
                    if (isLoaded) return;
                    isLoaded = true;
                    element.prepend(table);
                    loadStats(isProfilePage);
                } else {
                    if (!isLoaded) return;
                    isLoaded = false;
                    element.removeChild(table);
                    reset();
                }
            })
    })
} else {
    element.prepend(table);
    loadStats(isProfilePage);
}
