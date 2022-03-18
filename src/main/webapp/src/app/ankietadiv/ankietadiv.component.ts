import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnkietaService } from '../ankieta.service';

@Component({
  selector: 'app-ankietadiv',
  templateUrl: './ankietadiv.component.html',
  styleUrls: ['./ankietadiv.component.css']
})
export class AnkietadivComponent implements OnInit {

  @Input() ankieta: any = {};

  constructor(private ankietaService: AnkietaService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteAnkieta(): void{
    this.ankietaService.deleteAnkieta(this.ankieta.id).subscribe(
      (response: void) => {console.log(response); this.router.navigate(['/add']);}
    )
  }

}
