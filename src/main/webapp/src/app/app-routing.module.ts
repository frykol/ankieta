import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddankietaComponent } from './addankieta/addankieta.component';
import { AllankietyComponent } from './allankiety/allankiety.component';

const routes: Routes = [
  {
    path: "all",
    component: AllankietyComponent
  },
  {
    path: "add",
    component: AddankietaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
