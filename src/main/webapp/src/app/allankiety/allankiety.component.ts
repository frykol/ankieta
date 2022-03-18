import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ankieta } from '../ankieta';
import { AnkietaService } from '../ankieta.service';

@Component({
  selector: 'app-allankiety',
  templateUrl: './allankiety.component.html',
  styleUrls: ['./allankiety.component.css']
})
export class AllankietyComponent implements OnInit {

  public ankiety: Ankieta[] = [];

  constructor(private ankietaService: AnkietaService) {}

  ngOnInit(){
    this.getAnkiety();
  }

  public getAnkiety(): void{
    this.ankietaService.getAllAnkieta().subscribe(
      (response: Ankieta[]) => {this.ankiety = response;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )

  }

  updateAnkieta(ankieta: Ankieta): void{
    ankieta.apoints +=1;
    this.ankietaService.updateAnkieta(ankieta).subscribe(
      (response: Ankieta) => {console.log("es"); this.getAnkiety()},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }


}
