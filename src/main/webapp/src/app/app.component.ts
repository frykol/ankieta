import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ankieta } from './ankieta';
import { AnkietaService } from './ankieta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public ankiety: Ankieta[] = [];

  constructor(private ankietaService: AnkietaService) {}

  ngOnInit(){
    this.getAnkiety();
  }

  getAnkiety(): void{
    this.ankietaService.getAllAnkieta().subscribe(
      (response: Ankieta[]) => {this.ankiety = response;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

  title = 'webapp';
}
