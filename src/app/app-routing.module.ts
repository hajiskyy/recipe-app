import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { RecepieDetailComponent } from "./components/recepie-detail/recepie-detail.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";



const routes: Routes = [
  { path:'', component:FeedComponent  },
  { path:'feed', component: FeedComponent },
  { path:'login', component:LoginFormComponent  },
  { path:'register', component:RegisterFormComponent  },
  { path:'recepies', component: RecepiesComponent,
    children:[
       { path: ':id', component: RecepieDetailComponent }
     ]  
  },
  { path:'recepiess', redirectTo:'recepies', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
