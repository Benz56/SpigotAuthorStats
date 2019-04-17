const isProfilePage = window.location.href.includes("members");
const element = document.querySelector(isProfilePage ? "#ProfilePanes" : ".mainContent");

const table = document.createElement("div");
table.innerHTML = statsTable;
table.querySelector("#author").innerHTML = isProfilePage ? document.querySelector(".secondaryContent h1").textContent : element.querySelector(".titleBar").textContent.split(" ")[2];

let isLoaded = false;
let firstLoad = true;
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
                if (firstLoad) {
                    firstLoad = false;
                    window.setTimeout(function () {
                        replaceStars();
                    }, 1000);
                }
            } else {
                if (!isLoaded) return;
                isLoaded = false;
                element.removeChild(table);
                reset();
            }
        })
    })
} else {
    replaceStars();
    if (!window.location.href.includes("page") || window.location.href.includes("page=1")) {
        element.prepend(table);
        document.querySelector(".titleBar").style.display = "none";
        loadStats(isProfilePage);
    }
}

function replaceStars() {
    let resources = document.querySelectorAll(".resourceListItem");
    for (let i = 0; i < resources.length; i++) {
        let resource = resources[i];
        let newStarsSpan = document.createElement("span");
        let ratingString = resource.querySelector(".ratings").getAttribute("title");
        let fullStars = parseInt(ratingString.charAt(0));
        let commaStarSet = false;
        let j = 1;
        resource.querySelector(".ratings").childNodes.forEach(function (span) {
            if (span.className === undefined) return;
            let star = document.createElement("img");
            star.src = valImg[j <= fullStars ? 1.000 : 0.000];
            if (j > fullStars && !commaStarSet) {
                commaStarSet = true;
                star.src = getImage(parseFloat(ratingString.includes(".") ? ratingString.replace(ratingString.charAt(0), "0") : 0));
            }
            newStarsSpan.appendChild(star);
            j++;
        });
        resource.querySelector(".ratings").replaceWith(newStarsSpan);
    }
}