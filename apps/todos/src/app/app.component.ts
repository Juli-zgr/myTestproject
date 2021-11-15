import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from './logging.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'myproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todos';
  toDisplay = false;
  message = '';
  count = 0;
  todoForm!: FormGroup;


  constructor(private loggingService: LoggingService) {
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      name: new FormControl(''),
      time: new FormControl(''),
      importance: new FormControl('')
    });
  }

  onMessageToggleButtonClicked() {
    this.toDisplay = !this.toDisplay;
    this.toMessage();
  }

  toMessage() {
    console.log(`The light is ${this.toDisplay ? 'On' : 'Off'}`);
    this.loggingService.printLog('generate message');
    this.message = `The light is ${this.toDisplay ? 'On' : 'Off'}`;
    this.countClick();
  }

  countClick() {
    setTimeout(() => {
      this.count++;
    }, 1500);
  }
}
