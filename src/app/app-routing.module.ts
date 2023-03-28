import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarLembreteComponent } from './paginas/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './paginas/editar-lembrete/editar-lembrete.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';

const routes: Routes = [
  { path: '', component: ListaLembreteComponent },
  { path: 'lembrete/criar', component: CriarLembreteComponent },
  { path: 'lembrete/editar/:id', component: EditarLembreteComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
