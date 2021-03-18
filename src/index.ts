import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

//BELOW IS OBJECT COMPOSITION
const matchReader = MatchReader.fromCsv('assets/football.csv');

matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
//*** Refactored the above line*/
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
