document.addEventListener("DOMContentLoaded", function() {

    var container = document.getElementById("digital1-footer-signature");

    if (!container) {
        console.warn("Digital1 Signature: contenitore non trovato");
        return;
    }

    var button = document.createElement("a");
    button.href = "https://digital1.it";
    button.target = "_blank";
    button.textContent = "Sito Web realizzato da Digital1";

    button.style.display = "inline-block";
    button.style.padding = "8px 16px";
    button.style.backgroundColor = "#0073e6";
    button.style.color = "#fff";
    button.style.borderRadius = "20px";
    button.style.textDecoration = "none";
    button.style.fontFamily = "Arial, sans-serif";
    button.style.fontSize = "14px";
    button.style.fontWeight = "bold";
    button.style.transition = "background-color 0.3s, transform 0.2s";

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#005bb5";
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#0073e6";
        button.style.transform = "scale(1)";
    });

    container.style.textAlign = "center";
    container.appendChild(button);

});
