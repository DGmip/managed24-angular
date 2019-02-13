import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './comps/pages/home/home.component'
import { AboutComponent } from './comps/pages/about/about.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
