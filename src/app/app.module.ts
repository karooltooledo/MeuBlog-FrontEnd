import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path:"", redirectTo: "entrar", pathMatch:"full"},

  {path:"entrar", component: EntrarComponent},
  {path:"cadastrar", component: CadastrarComponent}
];

@NgModule({
  
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
