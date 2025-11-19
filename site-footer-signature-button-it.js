document.addEventListener("DOMContentLoaded", function() {
    // Cerca il footer; se non c'è, crealo
    var footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    // Crea il contenitore del badge
    var badge = document.createElement("div");
    badge.style.textAlign = "center";
    badge.style.marginTop = "20px";

    // Crea il “tasto”
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
    button.style.cursor = "pointer";

    // Effetto hover
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#005bb5";
        button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#0073e6";
        button.style.transform = "scale(1)";
    });

    badge.appendChild(button);
    footer.appendChild(badge);
});

