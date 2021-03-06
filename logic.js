let resources, ratedResources, pageCount, totalDownloads, normalDownloads, premiumDownloads, downloadRatio, ratings,
    avgRating;
ratedResources = totalDownloads = normalDownloads = premiumDownloads = ratings = avgRating = 0;

function loadStats(isProfilePage) {
    if (isProfilePage) {
        document.querySelectorAll(".secondaryContent.pairsJustified dl").forEach(value => {
            if (value.textContent.includes("Resources")) {
                resources = value.textContent.split("\n")[1];
            }
        })
    } else resources = document.querySelector(".resourceCount").textContent.split("\n")[1];

    table.querySelector("#totalResources").innerHTML = resources;

    pageCount = Math.ceil(resources.replace(",", "") / 20);

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
        let downloads = parseInt(resource.querySelector(".resourceDownloads").textContent.split(" ")[1].replace(/,/g, ""));
        let premium = resource.querySelector(".cost") != null;
        totalDownloads += downloads;


        if (premium) {
            premiumDownloads += downloads;
        } else normalDownloads += downloads;

        let ratio = (normalDownloads / premiumDownloads).toFixed(2);
        downloadRatio = "1 to " + (ratio.includes("Infinity") ? 0 : ratio) + " (" + ((1 - ((normalDownloads - premiumDownloads) / normalDownloads)) * 100).toFixed(2) + "%)";

        let resourceRatings = parseInt(resource.querySelector(".Hint").textContent.split(" ")[0].replace(",", ""));
        ratedResources += resourceRatings === 0 ? 0 : 1;
        ratings += resourceRatings;
        let rating = parseFloat(resource.querySelector(".ratings").getAttribute("title"));
        avgRating += rating;
    }
    loadedPages++;
    setStats();
}

function setStats() {
    table.querySelector("#totalDownloads").innerHTML = setCommas(totalDownloads);
    table.querySelector("#normalDownloads").innerHTML = setCommas(normalDownloads);
    table.querySelector("#premiumDownloads").innerHTML = setCommas(premiumDownloads);
    table.querySelector("#downloadRatio").innerHTML = downloadRatio;
    table.querySelector("#totalRatings").innerHTML = setCommas(ratings);
    let querySelector = table.querySelector("#averageRating");
    querySelector.innerHTML = (avgRating / ratedResources).toFixed(2) + " ";
    appendStars(querySelector, avgRating / ratedResources);
    document.getElementById("progressBarInner").style.width = (1 - ((pageCount - loadedPages) / pageCount)) * 100 + '%';
}

function setCommas(number) {
    const commaPattern = /\B(?=(\d{3})+(?!\d))/g;
    return number.toString().replace(commaPattern, ",");
}

function reset() {
    loadedPages = resources = pageCount = totalDownloads = normalDownloads = premiumDownloads = ratings = 0
}