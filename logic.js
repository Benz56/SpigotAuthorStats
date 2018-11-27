let resources, pageCount, totalDownloads, normalDownloads, premiumDownloads, downloadRatio, ratings;
totalDownloads = normalDownloads = premiumDownloads = ratings = 0;

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
        let downloads = parseInt(resource.querySelector(".resourceDownloads").textContent.split(" ")[1].replace(",", ""));
        let premium = resource.querySelector(".cost") != null;
        totalDownloads += downloads;

        if (premium) {
            premiumDownloads += downloads;
        } else normalDownloads += downloads;

        downloadRatio = "1 to " + (normalDownloads / premiumDownloads).toFixed(2) + " (" + ((1 - ((normalDownloads - premiumDownloads) / normalDownloads)) * 100).toFixed(2) + "%)";

        ratings += parseInt(resource.querySelector(".Hint").textContent.split(" ")[0].replace(",", ""));
    }
    loadedPages++;
    setStats();

}

function setStats() {
    const commaPattern = /\B(?=(\d{3})+(?!\d))/g;
    table.querySelector("#totalDownloads").innerHTML = totalDownloads.toString().replace(commaPattern, ",");
    table.querySelector("#normalDownloads").innerHTML = normalDownloads.toString().replace(commaPattern, ",");
    table.querySelector("#premiumDownloads").innerHTML = premiumDownloads.toString().replace(commaPattern, ",");
    table.querySelector("#downloadRatio").innerHTML = downloadRatio;
    table.querySelector("#totalRatings").innerHTML = ratings.toString().replace(commaPattern, ",");
    document.getElementById("progressBarInner").style.width = (1 - ((pageCount - loadedPages) / pageCount)) * 100 + '%';
}

function reset() {
    loadedPages = resources = pageCount = totalDownloads = normalDownloads = premiumDownloads = ratings = 0
}