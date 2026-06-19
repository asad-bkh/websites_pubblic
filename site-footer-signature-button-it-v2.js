(function () {

    function init() {

        const container = document.getElementById("digital1-footer-signature");
        if (!container) return;
        if (container.dataset.loaded) return;
        container.dataset.loaded = "1";

        const a = document.createElement("a");
        a.href = "https://digital1.it";
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        // ICON
        const dot = document.createElement("span");
        dot.textContent = "●";

        Object.assign(dot.style, {
            fontSize: "7px",
            opacity: "0.65",
            lineHeight: "1"
        });

        // TEXT
        const text = document.createElement("span");
        text.textContent = "Sito Web realizzato da Digital1";

        Object.assign(text.style, {
            letterSpacing: "0.2px",
            lineHeight: "1"
        });

        a.appendChild(dot);
        a.appendChild(text);

        // BADGE STYLE (more compact + better font)
        Object.assign(a.style, {
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",

            padding: "7px 12px",   // ↓ ridotto sopra/sotto
            marginBottom: "14px", // ↓ spazio sotto il bottone

            borderRadius: "999px",

            fontSize: "12px",
            fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontWeight: "500",

            textDecoration: "none",
            color: "inherit",

            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",

            transition: "all 0.2s ease",
            transform: "translateY(0)"
        });

        // hover subtle
        a.addEventListener("mouseenter", () => {
            a.style.transform = "translateY(-1px)";
            a.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
            a.style.opacity = "1";
        });

        a.addEventListener("mouseleave", () => {
            a.style.transform = "translateY(0)";
            a.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
        });

        container.style.textAlign = "center";
        container.appendChild(a);

    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
