import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';


const routes: Routes = [
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "search/:id",
    component: SearchDetailsComponent,
  },
  {
    path:"**",
    redirectTo:"/search",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
