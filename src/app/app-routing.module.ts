import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailResultsComponent } from './features/detail-results/detail-results.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail-results/:id', component: DetailResultsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
