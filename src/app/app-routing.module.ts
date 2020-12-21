import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfbaterComponent } from './anfbater/anfbater.component';


const routes: Routes = [
  { path: 'anfbater', component: AnfbaterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
