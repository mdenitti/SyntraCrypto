import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  name: string;
  encryptPass: any;
  userObj: {};
  apiUrl: string = 'http://houtenframemetbank.be/api/authors';

  constructor() { }

  register () {
        this.encryptPass = CryptoJS.MD5(this.password.trim()).toString();
        this.userObj={
          name: this.name,
          email: this.email,
          created_at: "2022-01-24",
          updated_at: "2022-01-24",
          book_id:1,
          password: this.encryptPass
        }
        console.log(this.userObj);

        this.postData(this.apiUrl,this.userObj )
          .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
  }

  // classic post fetch method... reusable
  async postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  ngOnInit(): void {
  }
}