"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const utils_1 = require("./utils");
let InstagramShare = null;
try {
    // @ts-ignore
    InstagramShare = require('@react-native-social-share/twitter').default;
}
catch (error) { }
if (!InstagramShare) {
    throw new Error('Your project need to install @react-native-social-share/twitter');
}
async function shareLink(link, description) {
    throw new Error('Not available');
}
async function shareVideo(videoUri) {
    const appIdentifier = react_native_1.Platform.select({
        android: '',
        ios: 'instagram://',
    });
    const isInstagramInstalled = utils_1.isAppInstalled(appIdentifier);
    if (!isInstagramInstalled) {
        throw new Error('Instagram must be installed');
    }
    return InstagramShare.shareVideo(videoUri);
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=instagram.js.map