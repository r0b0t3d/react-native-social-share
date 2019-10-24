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
exports.default = TwitterShare;
//# sourceMappingURL=twitter.js.map