"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGenerator = void 0;
var ReportGenerator = /** @class */ (function () {
    function ReportGenerator() {
    }
    ReportGenerator.prototype.generateReport = function (data) {
        return "Report Data: ".concat(data);
    };
    return ReportGenerator;
}());
exports.ReportGenerator = ReportGenerator;
