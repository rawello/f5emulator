const injectJs = chrome.runtime.getURL("scripts/injectscript.js");
const livequeryJS = chrome.runtime.getURL("scripts/jquery.livequery.min.js");

let script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", injectJs);
document.querySelector('head').appendChild(script);
let loadstr = document.body.getAttribute("onLoad");
loadstr = (loadstr === null) ? "" : loadstr;
document.body.setAttribute("onLoad", loadstr + " initYAPF5simylator();");
//== Livequery  в 1.2.6 нету live =(
script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", livequeryJS);
document.querySelector('head').appendChild(script);

//== favicon
let iconnew = chrome.runtime.getURL("icons/icon_new.ico");

window.addEventListener("message", function(e) {
    if (event.source !== window) {return;}
    if (event.data.type && (event.data.type === "loadUpdatePost")) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", event.data.url, true);
        xhr.params = event.data; //-- запоминаем принятые данные,
        // что бы потом их передать
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) { //TODO: обработать другие статусы
                window.postMessage(
                    { type: "showUpdatePost", favicon: iconnew,
                        updtPost: xhr.responseText, params: xhr.params }, "*");
            }
        };

        xhr.send();
    }
}, false);
