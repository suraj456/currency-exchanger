import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export const AUTHENTICATED = 'authenticated'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm : FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private router : Router
    ) { 
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })

  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm)
    sessionStorage.setItem(AUTHENTICATED, 'true')
    this.router.navigate(['converter'])
  }



}
