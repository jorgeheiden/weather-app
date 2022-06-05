import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { PrincipalComponent } from './componentes/principal/principal.component'
import { ReactiveFormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
 
registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
