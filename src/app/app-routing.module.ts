import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RecepiesComponent } from './components/recepies/recepies.component';
import { RecepieDetailComponent } from "./components/recepie-detail/recepie-detail.component";
import { AddRecepieFormComponent } from "./components/add-recepie-form/add-recepie-form.component";
import { EditRecepieFormComponent } from "./components/edit-recepie-form/edit-recepie-form.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { AddStepsComponent } from './components/add-steps/add-steps.component';



const routes: Routes = [
  { path:'feed', component:FeedComponent  },
  { path:'login', component:LoginFormComponent  },
  { path:'register', component:RegisterFormComponent  },
  { path:'recepies', component: RecepiesComponent},
  { path: 'recepies/:id', component: RecepieDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/add', component: AddRecepieFormComponent},
  { path: 'dashboard/edit', component: EditRecepieFormComponent },
  { path:'', redirectTo:'feed', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
