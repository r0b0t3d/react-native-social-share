"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let TwitterShare = null;
try {
    // @ts-ignore
    TwitterShare = require('@react-native-social-share/twitter').default;
}
catch (error) { }
if (!TwitterShare) {
    throw new Error('Your project need to install @react-native-social-share/twitter');
}
class TwitterSocialShare {
    shareLink(link, description) {
        return TwitterShare.shareLink(link, description);
    }
    async shareVideo(localVideo) {
        throw new Error('Not available');
    }
}
exports.default = new TwitterSocialShare();
//# sourceMappingURL=twitter.js.map