"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const FBSDK = require('react-native-fbsdk');
if (!FBSDK) {
    throw new Error('Your project need to install react-native-fbsdk');
}
async function shareLink(link, description) {
    const { ShareDialog } = FBSDK;
    const shareContent = {
        contentType: 'link',
        contentUrl: link,
        contentDescription: description,
    };
    return ShareDialog.show(shareContent);
}
async function shareVideo(localVideo) {
    const { ShareDialog } = FBSDK;
    const shareContent = {
        contentType: 'video',
        video: { localUrl: localVideo },
    };
    return ShareDialog.show(shareContent);
}
exports.default = {
    shareLink,
    shareVideo,
};
//# sourceMappingURL=facebook.js.map