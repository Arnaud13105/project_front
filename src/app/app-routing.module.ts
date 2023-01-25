import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { DemandeIntraComponent } from './components/forms/demande-intra/demande-intra.component';
import { DemandePersoComponent } from './components/forms/demande-perso/demande-perso.component';
import { FormationsComponent } from './components/forms/formations/formations.component';
import { FormulaireComponent } from './components/forms/formulaire/formulaire.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { SessionsComponent } from './components/forms/sessions/sessions.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { TestComponent } from './components/forms/test/test.component';
import { UsersComponent } from './components/forms/users/users.component';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'formation/:id', component: FormationsComponent },
  { path: 'formation/:id/session/:session.id', component: FormulaireComponent },
  { path: 'users/demande/intra', component: DemandeIntraComponent },
  { path: 'users/demande/perso', component: DemandePersoComponent },
  { path: 'session/:session.id/test', component: TestComponent },
  { path: 'session/:session.id', component: SessionsComponent },
  { path: '404', component: NotFoundComponent },
  {path: 'homeConnected', component: HomeConnectedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
