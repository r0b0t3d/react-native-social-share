"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import Twitter from '@react-native-social-share/twitter';
// @ts-ignore
let TwitterShare;
try {
    // @ts-ignore
    TwitterShare = require('@react-native-social-share/twitter');
}
catch (error) {
}
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