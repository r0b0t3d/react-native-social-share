"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Facebook;
let Twitter;
let Instagram;
function getSocialProvider(provider) {
    if (provider === 'facebook') {
        if (!Facebook) {
            // @ts-ignore
            Facebook = require('./facebook').default;
        }
        return Facebook;
    }
    else if (provider === 'twitter') {
        if (!Twitter) {
            // @ts-ignore
            Twitter = require('./twitter').default;
        }
        return Twitter;
    }
    else if (provider === 'instagram') {
        if (!Instagram) {
            // @ts-ignore
            Instagram = require('./instagram').default;
        }
        return Instagram;
    }
    return null;
}
function shareLink(provider, link, description) {
    const socialShare = getSocialProvider(provider);
    if (socialShare) {
        return socialShare.shareLink(link, description);
    }
    return Promise.resolve();
}
function shareVideo(provider, localVideo) {
    const socialShare = getSocialProvider(provider);
    if (socialShare) {
        return socialShare.shareVideo(localVideo);
    }
    return Promise.resolve();
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=index.js.map