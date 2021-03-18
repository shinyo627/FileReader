"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//BELOW IS OBJECT COMPOSITION
var matchReader = MatchReader_1.MatchReader.fromCsv('assets/football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
//*** Refactored the above line*/
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
