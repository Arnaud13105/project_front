import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeConnectedComponent } from './components/home-connected/home-connected.component';
import { LoginComponent } from './components/forms/login/login.component';
import { LoginService } from './shared/login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material-module';
import { ThemeBComponent } from './components/forms/theme-b/theme-b.component';
import { ThemeComponent } from './components/forms/theme/theme.component';
import { InformatiqueComponent } from './components/informatique/informatique.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewTechComponent } from './components/new-tech/new-tech.component';




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
    ThemeComponent,
    ThemeBComponent,
    InformatiqueComponent,
    ContactComponent,
    NewTechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }