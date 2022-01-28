import {Component, OnInit} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

  value: string;
  key: string;
  textEncrypt: string;
  md5Hash : any;
  shaHash : any;
  // password is hardcoded, you should fetch it from the user database
  // Plan: create a real login system. Fetch API, check, authenticate and authorize
  // Create a service / fetch methods / evaluate password / fill localstorage / logout -> destroy localstorage
  pass: string = 'a39912aba8240d4a6ebeb96df93aef25';
  token: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    this.textEncrypt = CryptoJS.AES.encrypt(this.value.trim(), this.key.trim()).toString();
    this.md5Hash = CryptoJS.MD5(this.value.trim()+'SALT');
    this.shaHash = CryptoJS.SHA256(this.value.trim()+'SALT');
    console.log(CryptoJS.AES.encrypt(this.value.trim(), this.key.trim()));

    if (this.md5Hash == this.pass) {
      sessionStorage.setItem('logged', this.md5Hash);
      this.token = sessionStorage.getItem('logged');
      console.log(this.token);
    }
  }

  clear(): void {
    this.textEncrypt = '';
    this.value = '';
    this.key = '';
    this.md5Hash = '';
    this.shaHash = '';
    
  }

}
