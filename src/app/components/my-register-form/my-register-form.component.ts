import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay } from 'rxjs';
import { MyRegisterFormService } from 'src/app/service/my-register-form.service';

@Component({
  selector: 'app-my-register-form',
  templateUrl: './my-register-form.component.html',
  styleUrls: ['./my-register-form.component.scss']
})
export class MyRegisterFormComponent implements OnInit {

  formData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    repeatPassword: "cityslicka"
  }

  loginForm!: FormGroup

  constructor(private api: MyRegisterFormService, public formControl: FormControl) { }

  ngOnInit(): void {
    this.loginForm = this.formControl.value({ email: '', password: '', repeatPassword: '' })
  }

  submit() {
    this.api.login(this.loginForm.value).subscribe()
    this.api.latestData.pipe(delay(1000)).subscribe(console.log)

  }

}
