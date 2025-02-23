export class Document {
  name: string;
  origName: string;
  url: string;
  pages: string[];

  constructor(name: string, origName: string, url: string, pages: string[]) {
    this.name = name;
    this.origName = origName;
    this.url = url;
    this.pages = pages;
  }
}
