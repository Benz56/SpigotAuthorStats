const isProfilePage = window.location.href.includes("members");
const element = document.querySelector(isProfilePage ? "#ProfilePanes" : ".mainContent");

const table = document.createElement("div");
table.innerHTML = statsTable;
table.querySelector("#author").innerHTML = isProfilePage ? document.querySelector(".secondaryContent h1").textContent : element.querySelector(".titleBar").textContent.split(" ")[2];

let isLoaded = false;
if (isProfilePage) {
    table.style.marginLeft = "20px";
    document.querySelectorAll(".Tabs li").forEach(value => {
        value.addEventListener("mouseup", function (e) {
            if (e.button !== 0) return;
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
    if (!window.location.href.includes("page") || window.location.href.includes("page=1")) {
        element.prepend(table);
        window.setTimeout(function () {
            document.querySelector(".titleBar").remove();
        }, 20);
        loadStats(isProfilePage);
    }
}
