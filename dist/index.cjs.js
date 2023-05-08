"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "px", {
    enumerable: true,
    get: function() {
        return _deepmerge.px;
    }
});
exports.sva = sva;
var _deepmerge = require("./deepmerge");
function sva(config) {
    function applyStyles(props) {
        const styles = [];
        if (!config.variants) {
            return styles;
        }
        for (const [prop, variant] of Object.entries(props)){
            styles.push(config.variants[prop][variant]);
        }
        return styles;
    }
    function stripStyles(props) {
        if (!config.variants) {
            return props;
        }
        const rest = {
            ...props
        };
        for (const [prop, variant] of Object.entries(props)){
            delete rest[prop];
        }
        return rest;
    }
    return {
        applyStyles,
        stripStyles
    };
}


//# sourceMappingURL=index.cjs.js.map