"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const utils_1 = require("./utils");
const error_1 = require("./error");
let InstagramShare = null;
try {
    // @ts-ignore
    InstagramShare = require('@react-native-social-share/instagram').default;
}
catch (error) { }
if (!InstagramShare) {
    throw new Error('Your project need to install @react-native-social-share/instagram');
}
async function shareLink(link, description) {
    throw new Error('Not available');
}
async function shareVideo(videoUri) {
    const appIdentifier = react_native_1.Platform.select({
        android: '',
        ios: 'instagram://',
    });
    const isInstagramInstalled = await utils_1.isAppInstalled(appIdentifier);
    if (!isInstagramInstalled) {
        throw new error_1.SocialError('APP_NOT_INSTALLED', 'Instagram must be installed');
    }
    return InstagramShare.shareVideo(videoUri);
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=instagram.js.map