"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const { Twitter } = react_native_1.NativeModules;
function shareLink(link, description) {
    Twitter.shareLink({ link, description });
}
exports.default = {
    shareLink
};
//# sourceMappingURL=index.js.map