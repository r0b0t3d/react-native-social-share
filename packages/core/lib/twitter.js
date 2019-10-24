"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const TwitterShare = require('@react-native-social-share/twitter');
if (!TwitterShare) {
    throw new Error('Your project need to install @react-native-social-share/twitter');
}
function shareLink(link, description) {
    return TwitterShare.shareLink(link, description);
}
async function shareVideo(localVideo) {
    throw new Error('Not available');
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=twitter.js.map