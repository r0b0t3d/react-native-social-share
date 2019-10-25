"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
async function shareLink(link, description) {
}
async function shareVideo(videoUri) {
    react_native_1.Linking.openURL(`instagram://media?id=${videoUri}`);
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=instagram.js.map