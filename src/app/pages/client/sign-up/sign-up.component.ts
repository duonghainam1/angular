import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]],

  }, {
    validator: (form: FormGroup) => {
      const password = form.get('password')?.value || ''
      const confirmPassword = form.get('confirmPassword')?.value || ''
      return password === confirmPassword ? null : { notMatch: true }
    }
  })
  onSubmit() {
    if (this.form.invalid) return
    this.authService.signup(this.form.value as any).subscribe(() => {
      alert("Đăng ký thành công")
      this.router.navigateByUrl("/signin")
    })
  }

}
