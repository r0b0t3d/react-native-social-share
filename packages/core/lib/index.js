"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facebook_1 = require("./facebook");
const twitter_1 = require("./twitter");
function shareLink(provider, link, description) {
    if (provider === 'facebook') {
        facebook_1.default.shareLink(link, description);
    }
    else if (provider === 'twitter') {
        twitter_1.default.shareLink(link, description);
    }
}
function shareVideo(provider, localVideo) {
    if (provider === 'facebook') {
        return facebook_1.default.shareVideo(localVideo);
    }
    return Promise.resolve();
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=index.js.map