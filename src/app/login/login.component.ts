import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  formSubmitted: boolean = false;

  isLoading : boolean = false;

  showToast: boolean = false;

  @Output() toastData: object = {};

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(){
    this.formSubmitted = true;
    const { email, password } = this.loginForm.value;

    this.isLoading = true;

    if(this.loginForm.valid){
      setTimeout(() => {
        this.isLoading = false;
        this.showToast = true;
        this.toastData = {title: 'Login successful!', message: 'You will be redirected to the home page.', type: 'success'};

        this.authService.loginUser(email, password);

        this.formSubmitted = false;
        this.loginForm.reset();

        setTimeout(() => {
          this.showToast = false;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 500);
        }, 2000);

      }, 2000);
    } else {
      console.log('Invalid form');
    }
  }
}
