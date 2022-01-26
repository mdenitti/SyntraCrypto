import {Component, OnInit} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent implements OnInit {

  // Our data, value = to decrypt , key = our key - textDecrypt is our result (show in view)
  value: string;
  key: string;
  textDecrypt: string;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    this.textDecrypt = CryptoJS.AES.decrypt(this.value.trim(), this.key.trim()).toString(CryptoJS.enc.Utf8);
    console.log(CryptoJS.AES.encrypt(this.value.trim(), this.key.trim()).toString());
  }

  clear(): void {
    this.textDecrypt = '';
    this.value = '';
    this.key = '';
  }

}
