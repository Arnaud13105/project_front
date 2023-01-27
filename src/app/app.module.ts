import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { UsersComponent } from './components/forms/users/users.component';
import { FormationsComponent } from './components/forms/formations/formations.component';
import { FormulaireComponent } from './components/forms/formulaire/formulaire.component';
import { DemandeIntraComponent } from './components/forms/demande-intra/demande-intra.component';
import { DemandePersoComponent } from './components/forms/demande-perso/demande-perso.component';
import { TestComponent } from './components/forms/test/test.component';
import { SessionsComponent } from './components/forms/sessions/sessions.component';
import { NavbarreComponent } from './components/core/navbarre/navbarre.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { NotFoundComponent } from './components/core/not-found/not-found.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { LoginComponent } from './components/forms/login/login.component';
import { LoginService } from './shared/login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    UsersComponent,
    FormationsComponent,
    FormulaireComponent,
    DemandeIntraComponent,
    DemandePersoComponent,
    TestComponent,
    SessionsComponent,
    NavbarreComponent,
    FooterComponent,
    NotFoundComponent,
    HomeConnectedComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
