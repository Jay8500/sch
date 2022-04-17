import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css'],
})
export class SloginComponent implements OnInit {
  public setLoginKeys = {
    loginName: 'admin',
    loginPwd: 'admin',
  };
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  login() {
    if (
      this.setLoginKeys.loginName == 'admin' &&
      this.setLoginKeys.loginPwd == 'admin'
    ) {
      this._router.navigateByUrl('/home')
    } else {
    }
  }
}
