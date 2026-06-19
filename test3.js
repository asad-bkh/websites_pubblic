(function () {

    function init() {

        const container = document.getElementById("digital1-footer-signature");

        if (!container) return;
        if (container.dataset.loaded) return;
        container.dataset.loaded = "1";

        const link = document.createElement("a");
        link.href = "https://digital1.it";
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        // ICON (minimal dot / signature style)
        const dot = document.createElement("span");
        dot.textContent = "●";
        dot.style.fontSize = "8px";
        dot.style.opacity = "0.6";

        const text = document.createElement("span");
        text.textContent = "Digital1";
        text.style.letterSpacing = "0.4px";

        link.appendChild(dot);
        link.appendChild(text);

        Object.assign(link.style, {
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontWeight: "500",
            textDecoration: "none",
            color: "inherit",
            opacity: "0.75",
            transition: "opacity 0.2s ease, transform 0.2s ease"
        });

        link.addEventListener("mouseenter", () => {
            link.style.opacity = "1";
            link.style.transform = "translateY(-1px)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.opacity = "0.75";
            link.style.transform = "translateY(0)";
        });

        container.style.textAlign = "center";
        container.appendChild(link);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();