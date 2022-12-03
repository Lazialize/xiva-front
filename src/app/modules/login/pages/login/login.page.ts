import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  login() {
    location.href = 'https://asia-northeast1-xiva-a0398.cloudfunctions.net/api/login'
  }
}
