(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
            setTimeout((function() {
                document.documentElement.classList.add("loaded");
            }), 0);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.addEventListener("load", windowLoad);
    function windowLoad() {
        createPosition();
        window.addEventListener("scroll", createPosition);
        function createPosition() {
            const contentElement = document.querySelector(".content__container");
            const windowHeight = window.innerHeight;
            const finalPost = scrollY / (contentElement.offsetTop - windowHeight) * 60;
            finalPost < 100 ? forestAnimation(finalPost) : forestAnimation(100);
        }
        function forestAnimation(finalPost) {
            const montains = document.querySelector(".screen-page__mountains");
            const trees = document.querySelectorAll(".screen-page__trees");
            document.querySelectorAll(".screen-page__birds");
            const montainsTranslate = 170 / 100 * finalPost;
            const montainsScale = 1 + 2 / 100 * finalPost;
            montains.style.cssText = `\n     transform:\n       translate3d(0, ${montainsTranslate}%, 0)\n       scale(${montainsScale})\n   `;
            trees.forEach(((tree, index) => {
                const treesTranslate = 20 * (trees.length - index) / 100 * finalPost;
                const treesScale = 1 + 1.5 / 100 * finalPost;
                tree.style.cssText = `\n      transform:\n        translate3d(0, ${treesTranslate}%, 0)\n        scale(${treesScale})\n    `;
            }));
        }
    }
    window["FLS"] = false;
    isWebp();
    addLoadedClass();
})();