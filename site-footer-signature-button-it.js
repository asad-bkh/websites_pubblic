document.addEventListener("DOMContentLoaded", function() {

    const container = document.getElementById("digital1-footer-signature");

    if (!container) {
        console.warn("Digital1 Signature: container not found");
        return;
    }

    container.style.textAlign = "center";

    const link = document.createElement("a");
    link.href = "https://digital1.it";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.style.display = "inline-flex";
    link.style.alignItems = "center";
    link.style.gap = "8px";
    link.style.padding = "10px 16px";
    link.style.borderRadius = "999px";
    link.style.background = "rgba(255,255,255,.08)";
    link.style.backdropFilter = "blur(8px)";
    link.style.webkitBackdropFilter = "blur(8px)";
    link.style.border = "1px solid rgba(255,255,255,.12)";
    link.style.textDecoration = "none";
    link.style.transition = "all .25s ease";
    link.style.fontFamily = "Inter, system-ui, sans-serif";
    link.style.fontSize = "13px";
    link.style.fontWeight = "500";
    link.style.color = "inherit";

    const icon = document.createElement("span");
    icon.textContent = "◆";
    icon.style.fontSize = "11px";
    icon.style.opacity = "0.85";

    const text = document.createElement("span");
    text.textContent = "Realizzato da Digital1";

    link.appendChild(icon);
    link.appendChild(text);

    link.addEventListener("mouseenter", function() {
        link.style.transform = "translateY(-2px)";
        link.style.boxShadow = "0 8px 24px rgba(0,0,0,.12)";
    });

    link.addEventListener("mouseleave", function() {
        link.style.transform = "translateY(0)";
        link.style.boxShadow = "none";
    });

    container.appendChild(link);

});
