import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { LembreteService } from 'src/app/services/lembrete.service';
import { Lembrete } from 'src/app/interfaces/lembrete';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css'],
})
export class CriarLembreteComponent {
  constructor(
    private lembreteService: LembreteService,
    private router: Router
  ) {}

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete).subscribe(
      () => {
        this.router.navigateByUrl('/');
      } //,
      //() => {this.erro};
    );
  }
}
