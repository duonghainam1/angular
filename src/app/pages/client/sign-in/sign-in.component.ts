import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  })
  onSubmit() {
    if (this.form.invalid) return
    this.authService.signin(this.form.value as any).subscribe((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      alert("Đăng nhập thành công")
      this.router.navigateByUrl("/")
    })
  }

}
