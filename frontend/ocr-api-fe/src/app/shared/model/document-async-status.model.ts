import {DocumentProcessStatus} from './document-process-status.model';

export class DocumentAsyncStatus {
  documentProcessStatus: DocumentProcessStatus;
  currentStatusLink: string;
  resultLin: string;


  constructor(documentProcessStatus: DocumentProcessStatus, currentStatusLink: string, resultLin: string) {
    this.documentProcessStatus = documentProcessStatus;
    this.currentStatusLink = currentStatusLink;
    this.resultLin = resultLin;
  }

}
