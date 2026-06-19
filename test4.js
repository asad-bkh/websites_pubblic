(function () {

    function init() {

        const container = document.getElementById("digital1-footer-signature");
        if (!container) return;
        if (container.dataset.loaded) return;
        container.dataset.loaded = "1";

        // LINK
        const a = document.createElement("a");
        a.href = "https://digital1.it";
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        // ICON DOT (pulse)
        const dot = document.createElement("span");
        dot.textContent = "●";

        Object.assign(dot.style, {
            fontSize: "8px",
            color: "currentColor",
            opacity: "0.7",
            animation: "d1pulse 1.8s infinite ease-in-out"
        });

        // TEXT
        const text = document.createElement("span");
        text.textContent = "Sito Web realizzato da Digital1";

        Object.assign(text.style, {
            letterSpacing: "0.3px"
        });

        a.appendChild(dot);
        a.appendChild(text);

        // STYLE BADGE
        Object.assign(a.style, {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 14px",
            borderRadius: "999px",
            fontSize: "12.5px",
            fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
            fontWeight: "500",
            textDecoration: "none",
            color: "inherit",

            // glass / premium feel
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            transition: "all 0.25s ease",
            transform: "translateY(0)"
        });

        // HOVER = vita
        a.addEventListener("mouseenter", () => {
            a.style.transform = "translateY(-2px)";
            a.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
            a.style.borderColor = "rgba(255,255,255,0.22)";
            a.style.opacity = "1";
        });

        a.addEventListener("mouseleave", () => {
            a.style.transform = "translateY(0)";
            a.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
            a.style.borderColor = "rgba(255,255,255,0.12)";
        });

        container.style.textAlign = "center";
        container.appendChild(a);

        // inject animation CSS once
        if (!document.getElementById("d1-style")) {
            const style = document.createElement("style");
            style.id = "d1-style";
            style.innerHTML = `
                @keyframes d1pulse {
                    0% { opacity: .3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.4); }
                    100% { opacity: .3; transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();