import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { userSignUp } from '../models/userSignUp';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private fb: FormBuilder,
   private authService:AuthService 
    ) { }

  ngOnInit(): void {
    this.signupForm= this.fb.group({

      FirstName : [null,Validators.required],
      LastName : [null,Validators.required],
      Email: [null,[Validators.required, Validators.email]],
      Address: [null,[Validators.required,Validators.maxLength(500)]],
      Password: [null,[Validators.required, Validators.minLength(8),]],
      ConfirmPassword: [null,Validators.required],
  })
  }

  submitSignupForm(){

    const registerData = new userSignUp(
      this.signupForm.controls['FirstName'].value,
      this.signupForm.controls['LastName'].value,
      this.signupForm.controls['Email'].value,
      this.signupForm.controls['Password'].value,
      this.signupForm.controls['ConfirmPassword'].value,
      this.signupForm.controls['Address'].value,
    );
    console.log(registerData);
    this.authService.signUpUser(registerData).subscribe(res => {
      console.log(res);
      if (res.status === 'Success') {
        this.signupForm.reset();
      }
    });
  }
}
