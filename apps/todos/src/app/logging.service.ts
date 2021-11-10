import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggingService {
  lastlog = '';

  printLog(message: string) {
    console.log(message);
    this.lastlog = message;
  }
}
