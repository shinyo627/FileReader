"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(fileName) {
        this.fileName = fileName;
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n      <div>\n      <h1>Analysis Output</h1>\n      <div>" + report + "</div>\n      </div>\n      ";
        //   Maybe i can implement to have the name of the file dynamic.
        fs_1.default.writeFileSync(this.fileName + ".html", html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
