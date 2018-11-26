let resources, pageCount, downloads = 0, ratings = 0;

function loadStats(isProfilePage) {
    if (isProfilePage) {
        document.querySelectorAll(".secondaryContent.pairsJustified dl").forEach(value => {
            if (value.textContent.includes("Resources")) {
                resources = value.textContent.split("\n")[1];
            }
        })
    } else resources = document.querySelector(".resourceCount").textContent.split("\n")[1];

    table.querySelector("#totalResources").innerHTML = resources;

    pageCount = Math.ceil(resources / 20);

    const baseURL = "https://www.spigotmc.org/resources/authors/" + window.location.href.substring(window.location.href.lastIndexOf("."));
    for (let pageIndex = 1; pageIndex <= pageCount; pageIndex++) {
        const url = baseURL + "?page=" + pageIndex;
        fetch(url).then(response => {
            return response.text();
        }).then(body => {
            scanPage(new DOMParser().parseFromString(body, "text/html"));
        })
    }
}

let loadedPages = 0;

function scanPage(pageHTML) {
    const resources = pageHTML.querySelectorAll(".resourceListItem");
    for (let i = 0; i < resources.length; i++) {
        let resource = resources[i];
        downloads += parseInt(resource.querySelector(".resourceDownloads").textContent.split(" ")[1].replace(",", ""));
        ratings += parseInt(resource.querySelector(".Hint").textContent.split(" ")[0].replace(",", ""));

    }
    loadedPages++;
    setStats();

}

function setStats() {
    const commaPattern = /\B(?=(\d{3})+(?!\d))/g;
    table.querySelector("#totalDownloads").innerHTML = downloads.toString().replace(commaPattern, ",");
    table.querySelector("#totalRatings").innerHTML = ratings.toString().replace(commaPattern, ",");
    document.getElementById("progressBarInner").style.width = (1 - ((pageCount - loadedPages) / pageCount)) * 100 + '%';
}

function reset() {
    loadedPages = resources = pageCount = downloads = ratings = 0
}