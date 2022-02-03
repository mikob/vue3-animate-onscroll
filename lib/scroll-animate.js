var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export default (function () {
    var getClientHeight = function () { return document.documentElement.clientHeight; };
    var isInScrollView = function (_a) {
        var top = _a.top, bottom = _a.bottom;
        return top < getClientHeight() && bottom > 0;
    };
    var isDirectionAgnostic = function (params) { return typeof params === "string"; };
    var isBiDirectional = function (params) {
        return params.down && params.up;
    };
    var hasBeenApplied = function (current, prev) {
        if (current === void 0) { current = ""; }
        if (prev === void 0) { prev = ""; }
        return current.trim() !== prev.trim();
    };
    var shouldResetAnimation = function (_a) {
        var params = _a.params, isUpwards = _a.isUpwards, repeat = _a.repeat;
        return repeat && ((isUpwards && params.down) || (!isUpwards && params.up));
    };
    var applyClass = function (el, current, newClass) {
        if (newClass === void 0) { newClass = ""; }
        return (el.className = (current + " " + newClass).trim());
    };
    return {
        isInView: isInScrollView,
        run: function (el, _a, _b) {
            var params = _a.value, modifiers = _a.modifiers;
            var isUpwards = _b.isUpwards, _c = _b.previousClassName, previousClassName = _c === void 0 ? "" : _c;
            if (!this.isInView(el.getBoundingClientRect())) {
                if (modifiers.repeat && isDirectionAgnostic(params)) {
                    return applyClass(el, previousClassName);
                }
                return;
            }
            if (isDirectionAgnostic(params)) {
                return applyClass(el, previousClassName, params);
            }
            if (modifiers.repeat ||
                isBiDirectional(params) ||
                !hasBeenApplied(el.className, previousClassName)) {
                var animationClass = isUpwards ? params.up : params.down;
                if (params.delay) {
                    el.style.visibility = "hidden";
                    return setTimeout(() => {
                        el.style.visibility = "visible";
                        return applyClass(el, previousClassName, animationClass);
                    } , params.delay);
                } else {
                    return applyClass(el, previousClassName, animationClass)
                }
            }
            if (shouldResetAnimation(__assign({ params: params, isUpwards: isUpwards }, modifiers))) {
                return applyClass(el, previousClassName);
            }
        },
    };
});
