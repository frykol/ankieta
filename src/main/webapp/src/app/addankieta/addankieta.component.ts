import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Ankieta } from '../ankieta';
import { AnkietaService } from '../ankieta.service';

@Component({
  selector: 'app-addankieta',
  templateUrl: './addankieta.component.html',
  styleUrls: ['./addankieta.component.css']
})
export class AddankietaComponent implements OnInit {

  constructor(private ankietaService: AnkietaService, private router: Router) { }

  ngOnInit(): void {
  }

  addAnkieta(form: NgForm){
    this.ankietaService.addAnkieta(form.value).subscribe(
      (response: Ankieta) => {console.log("dodano"); this.router.navigate(["/all"]);},
      (error: HttpErrorResponse) => {alert(error);}
    )
  }

}
