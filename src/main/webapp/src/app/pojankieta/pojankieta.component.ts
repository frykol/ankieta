import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private ankietaService: AnkietaService, private router: Router) { }



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

  updateAnkieta(ankieta: Ankieta): void{

    this.ankietaService.updateAnkieta(ankieta).subscribe(
      (response: Ankieta) => {console.log("es"); this.router.navigate(["/all"]);},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

  getForm(form: NgForm){
    if(form.value.odp == "a"){
      this.ankieta.apoints += 1;
    }
    else if(form.value.odp == "b"){
      this.ankieta.bpoints += 1;
    }
    else if(form.value.odp == "c"){
      this.ankieta.cpoints += 1;
    }
    else if(form.value.odp == "d"){
      this.ankieta.dpoints += 1;
    }
    this.updateAnkieta(this.ankieta);
  }

}
