import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onRegister(){
    this.formSubmitted = true;
    const { firstName, lastName, email, password } = this.registerForm.value;

    this.isLoading = true;

    if(this.registerForm.valid){
      setTimeout(() => {
        this.isLoading = false;
        this.showToast = true;
        this.toastData = {title: `Hello ${firstName}!`, message: `You will be redirected to the home page.`, type: 'success'};

        this.authService.registerUser(firstName, lastName, email, password);

        this.formSubmitted = false;
        this.registerForm.reset();

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