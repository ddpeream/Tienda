import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private authserive: AuthService
  ) {
    this.buildForm()
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authserive.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login'])
      })
    }
    console.log(this.form.valid)
  }

  private buildForm () {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

}
