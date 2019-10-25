"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saveToCameraRoll(localFile, options) {
    // @ts-ignore
    const CameraRoll = require('./camera-roll');
    CameraRoll.saveToCameraRoll(localFile, []);
}
exports.default = {
    saveToCameraRoll,
};
//# sourceMappingURL=utils.js.map