import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './containers/forgot-password-page/forgot-password-page.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { SocialLoginButtonsComponent } from './components/social-login-buttons/social-login-buttons.component';
import { AuthService } from "./services/auth.service";
import { AuthRoutingModule } from "./auth-routing.module";



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    EmailFormComponent,
    PasswordFormComponent,
    SocialLoginButtonsComponent
  ],
  imports: [
    CommonModule, AuthRoutingModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
