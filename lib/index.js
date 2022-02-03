import ScrollAnimate from "./scroll-animate";
export default {
    ScrollAnimate: ScrollAnimate,
    install: function (app, opt) {
        app.directive("animate-onscroll", {
            mounted: function (el, binding) {
                var domRef = window;
                if (opt && (opt === null || opt === void 0 ? void 0 : opt.id)) {
                    domRef = document.getElementById(opt.id);
                }
                else if (opt && (opt === null || opt === void 0 ? void 0 : opt.tag) == "body") {
                    domRef = document.body;
                }
                var scrollAnimate = ScrollAnimate();
                var previousClassName = el.className;
                var lastScrollTop = window.pageYOffset;
                domRef.addEventListener("scroll", function () {
                    var scrollTop = window.pageYOffset || domRef.scrollTop;
                    var isUpwards = scrollTop < lastScrollTop;
                    scrollAnimate.run(el, binding, { isUpwards: isUpwards, previousClassName: previousClassName });
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                }, false);
            },
        });
    },
};
