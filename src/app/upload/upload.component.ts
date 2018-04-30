import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http } from '@angular/http'
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Upload } from '../upload/upload';
import * as $ from 'jquery';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  url: string = "http://localhost/api/upload.php"
  headers: Headers;
  options: RequestOptions;
  upload: Upload = new Upload();
  formData: FormData = new FormData();

  constructor(
    private http: Http,
  ) { 
    this.headers = new Headers();
    // this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.delete("Content-Type");
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
  }

// <input type="file" (change)="fileChange($event)" placeholder="Upload file" accept=".pdf,.doc,.docx">

  fileChange(event) {
    let fileList: FileList = event.target.files;
    // console.log(event.target.files);
    
    if(fileList.length > 0) {
      let file: File = fileList[0];
      // this.formData:FormData = new FormData();
      this.upload.file = event.target.files;
      // this.formData.append('uploadFile', fileList[0], file.name);
      console.log(event.target.files);

      // this.http.post(this.url, this.formData, this.options)
      //   .subscribe(res=> console.log(res));
    }
  }

  cadastrar(event){
    
    // console.log(event.target.files);
    // console.log(this.upload);
    this.formData.append('image', $('#fileimagem')[0].files[0]);
    this.formData.append('nome', this.upload.nome)
    this.formData.append('email', this.upload.email)

    // $.ajax({
    //     url: this.url,
    //     type: 'POST',
    //     data: this.formData,
    //     contentType: false,
    //     processData: false,
    //     dataType: 'json',
    //     success: function(data){
    //         // alert(data);
    //         console.log(data)
    //     },
    //     complete: function(e, data){
    //       console.log('Completo');
    //       this.upload = new Upload();
    //     }
    // });

    console.log(this.formData);
    

    this.http.post(this.url, this.formData, this.options)
        .subscribe(res=>{ 
          if(res.status == 200){
            this.upload = new Upload();
          }
          console.log(res)
        });
  }

}
