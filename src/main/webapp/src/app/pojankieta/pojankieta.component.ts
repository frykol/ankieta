import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ankieta } from '../ankieta';
import { AnkietaService } from '../ankieta.service';

@Component({
  selector: 'app-pojankieta',
  templateUrl: './pojankieta.component.html',
  styleUrls: ['./pojankieta.component.css']
})
export class PojankietaComponent implements OnInit {

  ankieta: any = {};
  id: number = 0;

  constructor(private route: ActivatedRoute, private ankietaService: AnkietaService) { }



  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAnkieta(this.id);
  }

  getAnkieta(id: number){
    this.ankietaService.getAnkietaById(id).subscribe(
      (response: Ankieta) => {this.ankieta = response;},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

}
