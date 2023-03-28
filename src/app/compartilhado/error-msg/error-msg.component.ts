import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
})
export class ErrorMsgComponent {
  public error: string | undefined;

  setError(error: string, tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = '';
    }, tempo);
  }
}
