import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnkietaService } from './ankieta.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnkietadivComponent } from './ankietadiv/ankietadiv.component';
import { AllankietyComponent } from './allankiety/allankiety.component';
import { AddankietaComponent } from './addankieta/addankieta.component';
import { FormsModule } from '@angular/forms';
import { PojankietaComponent } from './pojankieta/pojankieta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnkietadivComponent,
    AllankietyComponent,
    AddankietaComponent,
    PojankietaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnkietaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
