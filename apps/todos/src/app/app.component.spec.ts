import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { LoggingService } from './logging.service';
import { MaybeMocked, mocked } from 'ts-jest/dist/utils/testing';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-list/todo-edit/todo-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockedLoggingservice: MaybeMocked<LoggingService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TodoListComponent, TodoEditComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [ {provide:LoggingService, useValue: {printLog: jest.fn()}} ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    mockedLoggingservice = mocked(TestBed.inject(LoggingService));
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  describe('Logic', () => {
    describe('click button', () => {

      let componentClickedSpy: jest.SpyInstance;

      beforeEach(() => {
        componentClickedSpy = jest.spyOn(component, 'onMessageToggleButtonClicked');
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        //componentClickedSpy.mockImplementation(() => console.log('hello'));
      })

      afterEach(() => {
        componentClickedSpy.mockClear();
        jest.useRealTimers();
      })

      it('should click',  () => {
        const button = fixture.debugElement.nativeElement.querySelector('#message-toggle-button');

        button.click();

        expect(component.onMessageToggleButtonClicked).toHaveBeenCalled();
      });

      it('should change message', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#message-toggle-button');

        button.click();
        button.click();

        expect(component.message).toEqual('The light is Off');
      })

      it('should change message', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#message-toggle-button');

        button.click();

        expect(component.message).toEqual('The light is On');
      })

      it('test counter', fakeAsync(() => {
        component.countClick();

        tick(1500);

        expect(component.count).toEqual(1);
      }))

      it('setTimeout ausführen', () => {
        component.countClick();

        expect(setTimeout).toHaveBeenCalledTimes(1);
      })

      it('test toDisplay boolean', () => {
        component.onMessageToggleButtonClicked();

        expect(component.toDisplay).toBe(true);
      })
    })
  })

  describe('Service: LoggingService', () => {
    /*let mockedLoggingservice: MaybeMocked<LoggingService>;
    beforeEach(async() => await TestBed.configureTestingModule({
      providers: [ {provide:LoggingService, useValue: {printLog: jest.fn()}} ]
    }).compileComponents());
    mockedLoggingservice = mocked(TestBed.inject(LoggingService));*/

    it('should call Loggingservice', function() {
      component.toMessage();
      expect(mockedLoggingservice.printLog).toBeCalled();
    });
  })

  describe('Template', () => {

    it(`should have as title 'todos'`, () => {
      expect(component.title).toEqual('todos');
    });

    it('should display message', () => {
      const messageElement = fixture.debugElement.query(By.css('.c-app__message')).nativeElement as HTMLElement;
      expect(messageElement.textContent).toBe('');
    });
  })

});
