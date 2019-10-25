"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let CameraRoll = null;
try {
    // @ts-ignore
    CameraRoll = require('@react-native-community/cameraroll').default;
}
catch (error) { }
if (!CameraRoll) {
    throw new Error('You need to install @react-native-community/cameraroll');
}
exports.default = CameraRoll;
//# sourceMappingURL=camera-roll.js.map