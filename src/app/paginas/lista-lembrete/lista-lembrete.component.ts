import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from 'src/app/interfaces/lembrete';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css'],
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[] | undefined;
  @ViewChild(ErrorMsgComponent) errorMsgComponent:
    | ErrorMsgComponent
    | undefined;

  constructor(private lembreteService: LembreteService) {}

  ngOnInit() {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes().subscribe(
      (lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
      },
      () => {
        this.errorMsgComponent?.setError('Falha ao Buscar Lembretes.');
      }
    );
  }

  deleteLembrete(id: number) {
    this.lembreteService.deletaLembrete(id).subscribe(
      () => {
        this.getListaLembretes();
      },
      () => {
        this.errorMsgComponent?.setError('Falha ao deletar lembrete');
      }
    );
  }

  //  existemLembretes(): boolean{
  //  return this.lembretes && this.lembretes.length >0;
  //}
}
