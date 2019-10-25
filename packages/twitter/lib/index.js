"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const { TwitterShare } = react_native_1.NativeModules;
function shareLink(link, description) {
    TwitterShare.shareLink({ link, description });
}
exports.default = {
    shareLink,
};
//# sourceMappingURL=index.js.map