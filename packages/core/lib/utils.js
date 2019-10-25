"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
function isAppInstalled(appIdentifier) {
    if (react_native_1.Platform.OS === 'android') {
    }
    else {
        return react_native_1.Linking.canOpenURL(appIdentifier);
    }
}
exports.isAppInstalled = isAppInstalled;
function prepareAssetPath(assetPath) {
    if (react_native_1.Platform.OS === 'ios' && assetPath && assetPath.length >= 14 && assetPath.substring(0, 14) !== 'assets-library') {
        return `assets-library://asset/asset.mp4?id=${assetPath.split('/')[2]}&ext=mp4`;
    }
    return assetPath;
}
exports.prepareAssetPath = prepareAssetPath;
//# sourceMappingURL=utils.js.map