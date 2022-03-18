import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ankieta } from '../ankieta';
import { AnkietaService } from '../ankieta.service';

@Component({
  selector: 'app-editankieta',
  templateUrl: './editankieta.component.html',
  styleUrls: ['./editankieta.component.css']
})
export class EditankietaComponent implements OnInit {

  ankieta: Ankieta = {
    id: 0,
    questionName: "",
    a: "",
    b: "",
    c: "",
    d: "",
    apoints: 0,
    bpoints: 0,
    cpoints: 0,
    dpoints: 0,
  };
  id: number = 0;

  constructor(private route: ActivatedRoute, private ankietaService: AnkietaService, private router: Router) { }



  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getAnkieta(this.id);
  }

  getAnkieta(id: number){
    this.ankietaService.getAnkietaById(id).subscribe(
      (response: Ankieta) => {this.ankieta = response; console.log(this.ankieta)},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

  editAnkieta(ank: Ankieta){
    ank.id = this.ankieta.id;
    ank.apoints = this.ankieta.apoints;
    ank.bpoints = this.ankieta.bpoints;
    ank.cpoints = this.ankieta.cpoints;
    ank.dpoints = this.ankieta.dpoints;
    this.ankietaService.updateAnkieta(ank).subscribe(
      (response: Ankieta) => {console.log("updated"); this.router.navigate(["/all"]);},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }
}
