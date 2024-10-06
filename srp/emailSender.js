"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSender = void 0;
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.sendEmail = function (recipient, message) {
        console.log("Email sent to ".concat(recipient, " with message: ").concat(message));
    };
    return EmailSender;
}());
exports.EmailSender = EmailSender;
