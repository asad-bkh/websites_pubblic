document.addEventListener("DOMContentLoaded", function() {
    // Cerca il footer; se non c'è, crea uno
    var footer = document.querySelector("footer");
    if (!footer) {
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }

    // Crea il div della firma
    var div = document.createElement("div");
    div.style.textAlign = "center";
    div.style.fontSize = "54px";
    div.style.padding = "8px 0";
    div.style.fontFamily = "Arial, sans-serif";
    div.style.color = "#555";
    div.style.borderTop = "1px solid #ddd";
    div.style.marginTop = "20px";

    // Contenuto della firma
    div.innerHTML = 'Sito realizzato da <a href="https://digital1.it" target="_blank" style="color:#0000000; text-decoration:none; font-weight:bold;">Digital1</a>';

    footer.appendChild(div);
});


