const VARIATION = 200;

const DEFAULT_TEXT = "GT3.rs";

window.onload = function () {
    let texteElem = document.getElementById("text")
    unblur(texteElem)
};

function unblur(htmlElement) {
    let taggedText = "";

    let txt = DEFAULT_TEXT
    if (document.getElementById("text") !== null) {
        txt = document.getElementById("text").innerText;
    }

    for (let i = 0; i < txt.length; i++) {
        const element = txt[i];
        taggedText += `<span>${element}</span>`;
    }

    htmlElement.innerHTML = taggedText

    let spans = htmlElement.children

    for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        span.classList.add("text-animation-initial-state");

        if (span.innerHTML === " ") {
            continue;
        }

        let padding = Math.abs((spans.length) - i) * 0.1;

        let randomVariation = Math.floor(Math.random() * VARIATION + i * 50);
        span.style.padding = padding + "px";

        setTimeout(() => {
            span.classList.add("animate_padding");
            span.classList.add("animate_blur");
            span.classList.remove("text-animation-initial-state");
        }, randomVariation);
    }
}