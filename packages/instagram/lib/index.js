"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const react_native_1 = require("react-native");
const { Instagram } = react_native_1.NativeModules;
function shareVideo(videoUri) {
    if (react_native_1.Platform.OS === 'ios') {
        react_native_1.Linking.openURL(`instagram://library?AssetPath=${videoUri}`);
    }
}
exports.default = {
    shareVideo,
};
//# sourceMappingURL=index.js.map