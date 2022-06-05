import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private fb: FormBuilder, private http: HttpClient){}

  sampleForm = this.fb.group({
    firstName : ["", Validators.required],
    lastName : ["", Validators.required],
    selected : ["", Validators.required],
    gender : ["", Validators.required],
    check : ["", Validators.required]
  });
 
 
 submit()
 {
   this.http.post<any>("http://localhost:3000/userData", this.sampleForm.value).subscribe(res => {
     alert("Form Submitted Successfully");
     this.sampleForm.reset();
   }, err => {
     alert("Something went wrong")
   })
 }
 

}
