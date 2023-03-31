import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente.service';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { MaterialModule } from './material-module';
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatRadioModule,  
    AppRoutingModule  
  ],
  providers: [HttpClientModule, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }