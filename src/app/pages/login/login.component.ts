import { AuthService } from './../../utils/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  private formSubmitAttempt: boolean | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string): boolean {

    const result = (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
    (this.form.get(field)?.untouched && this.formSubmitAttempt)

    return !!result;


   /* return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );*/
  }

  onSubmit(): void {
    if (this.form?.valid) {
      this.authService.login(this.form?.value);
    }
    this.formSubmitAttempt = true;
  }

}
