import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AqsDataComponent } from './aqs-data/aqs-data.component';

const routes: Routes = [
  { path: 'aqs-data', component: AqsDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
