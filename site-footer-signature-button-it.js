(function() {

```
function init() {

    const container = document.getElementById("digital1-footer-signature");

    if (!container) {
        console.warn("Digital1 Signature: container not found");
        return;
    }

    if (container.dataset.digital1Loaded) {
        return;
    }

    container.dataset.digital1Loaded = "true";
    container.style.textAlign = "center";

    const link = document.createElement("a");

    link.href = "https://digital1.it";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.innerHTML = `
        <span style="opacity:.7">✦</span>
        <span>Realizzato da Digital1</span>
    `;

    Object.assign(link.style, {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 18px",
        borderRadius: "999px",
        textDecoration: "none",
        fontSize: "13px",
        fontWeight: "500",
        fontFamily: "system-ui, sans-serif",
        color: "inherit",
        border: "1px solid rgba(255,255,255,.15)",
        transition: "all .25s ease"
    });

    link.addEventListener("mouseenter", function() {
        link.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function() {
        link.style.transform = "translateY(0)";
    });

    container.appendChild(link);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
```

})();
