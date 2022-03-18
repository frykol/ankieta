import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddankietaComponent } from './addankieta/addankieta.component';
import { AllankietyComponent } from './allankiety/allankiety.component';
import { PojankietaComponent } from './pojankieta/pojankieta.component';

const routes: Routes = [
  {
    path: "all",
    component: AllankietyComponent
  },
  {
    path: "add",
    component: AddankietaComponent
  },
  {
    path: "ank/:id",
    component: PojankietaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
