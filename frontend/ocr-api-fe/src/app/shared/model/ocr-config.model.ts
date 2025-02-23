export class OcrConfig {
  lang: string = 'eng';
  multiPages: boolean = false;
  highQuality: boolean = false;


  constructor(lang: string, multiPages: boolean, highQuality: boolean) {
    this.lang = lang;
    this.multiPages = multiPages;
    this.highQuality = highQuality;
  }
}
