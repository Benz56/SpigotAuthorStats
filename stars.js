let valImg = {
    1.000: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAABCklEQVQ4T42QsU7CUBSG+0ymDIbwEj6Aoy7MfQASeAFfws2N4OBg0E4MpiEQTQcGQqnUWoK2aDTH+19yy73HQ8LwJef85/tvCh4RHeT3KyXAcxsxNHwurgnw3EYMDXl0SXl0oUb5DsTQkDw0CPDcRgxBubyhZHiiwczvBjEE+bhdP4CZ3w1e+dqnNGzV8rGgg65+5aeaU/Z0LooScNHRX2A+BWxmV0rw/xX2+ATH7jgPgO3bvVDcgRv3nQVUq1uxDHDjvrOAYhrUheXjqcbs75NAKa7vLCANm1pejc7o++NZgxkZbtx3liq702Lx0lGrKyLDDY6dO9I67qrfOVDjPrPBf7COe2o0GXl/BBjWZCFtmUMAAAAASUVORK5CYII=",
    0.875: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAABDElEQVQ4T42QPW7CQBBGfSbkFCjiEjkAZdJQ+wCR4AK5BB1dRIoUCHCVAiEEAlEgJwLMj2MLYicR0bDfRmvvbiYSxZNmvnkzWtshon/5+QoJ2LkOGyo+lk0Cdq7DhopoeEfR8FaU/BywoWLVuyJg5zpsCNJ1i1bdkgS1PVewIYhGtfwAanuucNLNI4V+JZcvJQheJfLKKXuj3aDKihxwsSxfoJ4CDosHIbh/FgpcgqPvGAfA577DLP6Cme0bDci2T+wywMz2jQbEEy9fWPfLEtW/jz2hmL7RgNC/lvL25Ya+j1MJamSY2b7RZLtnKcaze9GaIjLM4Oi5ISXzuvjOtiiLTAf/IJk3RKkycs5QMNcAMbTMLAAAAABJRU5ErkJggg==",
    0.750: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAABAklEQVQ4T4WQP04CURDG90wGCmO4BAeghMaaA5h4Ai9BR0e0oCAKlYUhBAOhIECABVwgIKtGMrzvkbe8GQcpfsnM92fydgMiOsv+OyQgdR9VdHyOSwSk7qOKjqhZoKiZN6PuA1V0TF7SBKTuo4pgNy3T5PnKgln6DlUEUes2OYBZ+o5gN6tQ2Mgk4UsMBkOGvfIbj2jxllMLEr9sX+CeAjb9BxNK/SmdSCVFBzsAvj5qSvEIPJlnC4jnT2oZwJN5toDVezEpTOvXFrcv20UT4Xm2gLBxY8Pz1yz9bDsWzNDgyTxb4kXVBlfdO7PyIDR4//7Ede/efOejGU+aD/4BP0DBAX1s2oqH/ynzAAAAAElFTkSuQmCC",
    0.625: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAA6UlEQVQ4T6WOwQ7BQBCG+0zCQcRLeABHLs4eQOIJvISbm3BwEPTkICIR4iAl2mo1FbQIGZ1NtrbbqRCHL5n9Z/4vqwBAIs+bCYici5Ah57JrAiLnImTIcaZlcKalYKT3CBly9GEGEDkXIUPEM1qgD1IMnOU9hwwRZ1YJBTjLe47i7dtgqvnwOAlN25Awy8Pfgj0pkkUOVWY/4F9BTutGcJyOlWWB2IkIkOuh/1Eg30ceiG91/xO482pYMkZZxk8CU82xgjUuwP28YOD8lcC3e6zsLmvBM3rIBbIkcnRc1cG3OsH4zkTiAlBenaLk3lz/HjQAAAAASUVORK5CYII=",
    0.500: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAAxElEQVQ4T2P4//8/Tvz358v/jx49BjKxy4MwVkEY/vpsBWUGvLuUTpkBz4+Ykm/Atxfr/z8/bAQ2AJ8hWAVB+N2VHOIM+PZq2/+Xx2zBirFhmAG4MNiUP9+f/H9zIY5kA8AugDkFhD8/mAzUZELQAGQ9KAaA8I+3B/EagK4ehQPC31/vpMyAD9fL4JpfHLUk3YCXx6zBml+fCfr/68tN0gz4/mYvWPOHW01ALqpCXIagKPp4p/X/99c7gEyEGDLGNOA/AwAoHPIzlPyIzAAAAABJRU5ErkJggg==",
    0.375: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAAmklEQVQ4T2P4//8/Tvzo0eP/IIwujoyxCsLwEDcAppmQIVgFQZhoA7692vb/5THb/88PG6FgdANwYbApf74/+f/mQhzJBoBdAHMKCH9+MBmo2YSgAch6UAwA4R9vD+I1AF09CgeEv7/eSZkBH66XUWbAy2PW5Bvw/c1esOYPt5qAXFSFuAxBUfTxTuv/7693AJkIMWSMacB/BgAUVP+HHo+KXQAAAABJRU5ErkJggg==",
    0.250: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAAkElEQVQ4T9XOMQqAMAwFUM/k7lW8jSfwLm5OgrMHcJAqiOIigl2ESAqFJKZUR4c3pPz/aQIAQcaMgOQ7pT56Px/w5diI+oheD5xrBUubwdykjizGuJXLTrB1+ecB9wP/FXQMpRqUaIcNIK1AyTw7kFaiZJ4dSCtRMs8OpJUomWeH3epgMDTCQntfqGXvOQDJDSTSCek4kTckAAAAAElFTkSuQmCC",
    0.125: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAAdklEQVQ4T9WOwQ2AMAwDuxhrMwKDFD4wAHyQglypkhNcCk8e97BjW0lm1iTn2UD0GWlWfj5Qy70RaYLXA/s22joNLvyFsnIeizz2KB/UV4AKKbjjBoAqMDHvBFAlJuadAKrExLwTQJWYmHfiKdi6yRB7zP1u6QLcaA10faU6WwAAAABJRU5ErkJggg==",
    0.000: "data:img;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTnU1rJkAAAAZUlEQVQ4T9WOQQ4AIQwC/f8z3YfUYNKEIu7qcQ9zgAJpi4gtvT8B1Gesmfx8IMtfI9YExwMavGWuuMMJ84N85WaIO2UAuAKj+SKAKzGaLwK4EqP5IoArMZov4i24u9kQe8x6jzYASMcOEAC1EtMAAAAASUVORK5CYII="
};

function appendStars(cell, stars) {
    let fullStars = parseInt(stars);
    let commaStarSet = false;
    for (let i = 1; i <= 5; i++) {
        let element = document.createElement("img");
        element.src = valImg[i <= fullStars ? 1.000 : 0.000];
        if (i > fullStars && !commaStarSet) {
            commaStarSet = true;
            element.src = getImage(stars - fullStars);
        }
        cell.appendChild(element);
    }
}

function getImage(val) {
    let image = null;
    Object.keys(valImg).sort((a, b) => b - a).forEach(function (key) {
        if (key !== "1.000" && parseFloat(key) <= val + 0.005 && image === null) {
            image = valImg[key];
        }
    });
    return image === null ? valImg[0.000] : image;
}
