import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilderComponent} from './bilder/bilder.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'bilder',
    component: BilderComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
