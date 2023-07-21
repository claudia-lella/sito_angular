import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* new component home*/
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

  /* home route, localhost:4200 */
  {path:"", component:HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
