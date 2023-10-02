import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-image-preview',
  templateUrl: './upload-image-preview.component.html',
  styleUrls: ['./upload-image-preview.component.css']
})
export class UploadImagePreviewComponent {
  @Output() uploadImagesEvent = new EventEmitter<Array<string>>();

  constructor(private toastr: ToastrService) { }

  uploadImagesURL: Array<string> = [];

  selectFiles(event: any) { //Angular 11, for stricter type
    debugger;
		if(event.target.files) {
      if(this.uploadImagesURL.length + event.target.files.length > 5) {
       this.toastr.warning("Upto 5 images are allowed at max.");
        return;
      }
		}
    else {
      this.toastr.error('You must select atleast one image');
			return;
    }

    for(let file of event.target.files) {
      if(!this.checkMime(file.type)){
        this.toastr.error("Only image file types allowed")
        return;
      }
    }

    for(let file of event.target.files) {
      var reader = new FileReader();

      reader.onload = (e: any) => {
        this.uploadImagesURL.push(e.target.result);
        this.uploadImagesEvent.emit(this.uploadImagesURL);
      }
      reader.readAsDataURL(file);
    }
  }

  checkMime = function(mimeType:string) {
    if (mimeType.match(/image\/*/) == null) {
      return false;
    }
    return true;
  }
}
