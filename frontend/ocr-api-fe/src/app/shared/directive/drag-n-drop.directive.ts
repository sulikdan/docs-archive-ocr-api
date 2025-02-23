import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {
  // Thanks mate
  // https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854

  @HostBinding('class.file-over') fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();
  // public fileDropped = output<any>();

  constructor() { }


  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();

    this.fileOver = true;
    console.log('Drag over.')
  }


  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(e: any){
    e.preventDefault();
    e.stopPropagation();

    this.fileOver = false;
    console.log('Drag leave.')
  }


  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(e: any) {
    e.preventDefault();
    e.stopPropagation();

    this.fileOver = false;
    const files = e.dataTransfer.files;
    if( files.length > 0 ) {
      //TODO assign magic
      this.fileDropped.emit(files);
      console.log(`You dropped ${files.length} files.`);
    }

  }
}
