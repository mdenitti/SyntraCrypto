import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// formsmodule for use with [(ngModel)]
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {EncryptComponent} from './components/encrypt/encrypt.component';
import {DecryptComponent} from './components/decrypt/decrypt.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EncryptComponent,
    DecryptComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
