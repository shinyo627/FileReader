import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `
      <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
      </div>
      `;

    //   Maybe i can implement to have the name of the file dynamic.
    fs.writeFileSync(`${this.fileName}.html`, html);
  }
}
