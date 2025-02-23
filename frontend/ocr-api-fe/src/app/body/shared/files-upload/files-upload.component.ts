import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatProgressBar} from '@angular/material/progress-bar';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatList, MatListItem} from '@angular/material/list';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {DragNDropDirective} from '../../../shared/directive/drag-n-drop.directive';

@Component({
  selector: 'app-files-upload',
  imports: [
    MatToolbar,
    MatProgressBar,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatListItem,
    MatIcon,
    DragNDropDirective,
    MatMiniFabButton
  ],
  templateUrl: './files-upload.component.html',
  standalone: true,
  styleUrl: './files-upload.component.scss'
})
export class FilesUploadComponent {
  @ViewChild("fileDropRef", {static: false}) fileDropEl: ElementRef | null = null;

  @Input() fileService = null;


  areFilesBeingUploaded: boolean = false;

  progressState = 0;
  message = '';

  selectedFilesMap: Map<string, File> = new Map<string, File>();
  selectedFiles: File[] = [];

  // obsolete - delete later
  currentFile?: File;
  fileName = 'Select File';
  fileInfos?: Observable<any>;



  assignSelectedFiles(files: any) {
    this.progressState = 0;
    this.message = "";

    console.log("Assignign files :", files);

    if (files && files.length > 0) {
      for (let file of files) {
        const fileTyped: File = file;
        // File
        this.selectedFilesMap.set(fileTyped.name, fileTyped);
      }

      // may reconsider this in future ... pointlessly creating list again ...
      this.selectedFiles = this.convertMapToArray(this.selectedFilesMap);
    } else {
      return;
    }

  }

  /**
   * Used when file(s) are browsed and selected
   * @param event
   */
  fileSelectedHandler(event: any) {
    if (event.target.files) {
      this.assignSelectedFiles(event.target.files)
    } else {
      console.error("No files provided.")
      return;
    }
  }

  /**
   * Used when file(s) are drag-and-dropped
   * @param event
   */
  onFilesDropped(files: any) {
    this.assignSelectedFiles(files)
  }

  deleteFile(file: File) {
    this.selectedFilesMap.delete(file.name);
    this.selectedFiles = this.convertMapToArray(this.selectedFilesMap);
  }


  private convertMapToArray(map: Map<any, any>) : any[] {
    return Array.from(map.values());
  }

  clearSelectedFiles() {
    this.selectedFilesMap = new Map<string, File>();
    this.selectedFiles = [];
  }


  uploadFile() {
    if( !(this.selectedFiles && this.selectedFiles.length > 0) ){
      console.warn("Invaliding try to upload nothing.")
      return
    }



  }
}
