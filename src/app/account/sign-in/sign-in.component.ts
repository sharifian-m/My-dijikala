import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!:FormGroup;
  userSubmitted!:boolean;
user:any[]=[];
constructor(private fb: FormBuilder) { } 

  ngOnInit(): void {
    this.signInForm= this.fb.group({

      Email: [null,[Validators.required, Validators.email]],
      Password: [null,[Validators.required, Validators.minLength(8)]],

  })
  
}

submitSignInForm() {
  console.log(this.signInForm.value);
  // this.user = Object.assign(this.user, this.signInForm.value);
  // console.log(" this.user", this.user);
  // localStorage.setItem('Users',JSON.stringify(this.user));
 
}
}
