"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocialError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
exports.SocialError = SocialError;
//# sourceMappingURL=error.js.map