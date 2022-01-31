import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService],
 
})
export class AccountModule { }
