import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './compartilhado/form-lembrete/form-lembrete.component';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';

@NgModule({
  declarations: [AppComponent, ListaLembreteComponent, FormLembreteComponent, CriarLembreteComponent, EditarLembreteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
