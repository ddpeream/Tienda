import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login (event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authservice.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin'])
        .catch(() => {
          alert('no es valido');
        })
      } )
    }
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
