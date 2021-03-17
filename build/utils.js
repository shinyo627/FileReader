"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    //   28/10/2018
    var dateParts = dateString
        .split('/') // ['28', '10', '2018']
        .map(function (value) { return parseInt(value); });
    return new Date(dateParts[2], dateParts[1], dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
