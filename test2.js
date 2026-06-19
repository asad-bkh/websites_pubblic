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
        a.textContent = "Realizzato da Digital1";

        Object.assign(a.style, {
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            fontSize: "13px",
            fontFamily: "system-ui",
            background: "rgba(0,0,0,0.05)"
        });

        container.appendChild(a);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();