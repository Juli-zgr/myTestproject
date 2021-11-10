import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { LoggingService } from './logging.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  describe('Logic', () => {
    describe('click button', () => {

      let componentClickedSpy: jest.SpyInstance;

      beforeEach(() => {
        componentClickedSpy = jest.spyOn(component, 'clicked');
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');
        //componentClickedSpy.mockImplementation(() => console.log('hello'));
      })

      afterEach(() => {
        componentClickedSpy.mockClear();
      })

      it('should click',  () => {
        const button = fixture.debugElement.nativeElement.querySelector('button');

        button.click();

        expect(component.clicked).toHaveBeenCalled();
      });

      it('should change message', () => {
        const button = fixture.debugElement.nativeElement.querySelector('button');

        button.click();

        expect(component.message).toEqual('The light is On');

        button.click();

        expect(component.message).toEqual('The light is Off');
      })

      it('test counter', fakeAsync(() => {
        component.countClick();

        tick(1500);

        expect(component.count).toEqual(1);
      }))

      it('setTimeout ausführen', () => {
        component.countClick();
        component.countClick();
        expect(setTimeout).toHaveBeenCalledTimes(2);
      })

      it('test toDisplay boolean', () => {
        component.clicked();
        expect(component.toDisplay).toBe(true);
      })
    })
  })

  describe('Service: LoggingService', () => {
    beforeEach(() => TestBed.configureTestingModule({
      providers: [ LoggingService ]
    }));

    /*it('should return available languages', inject([LoggingService], service => {
      expect(service.printLog());
    }));*/
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
