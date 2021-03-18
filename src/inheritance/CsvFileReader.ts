import fs from 'fs';

// Making CsvFileReader with generic <T> that can hold any type
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // *** Converting stringDate to Date and string to number in each row of string
      .map(this.mapRow);
  }
}
