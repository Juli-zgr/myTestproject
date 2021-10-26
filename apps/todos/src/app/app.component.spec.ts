import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

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
    expect(component).toBeTruthy();
  });

  describe('Logic', () => {
    describe('click button', () => {
      it('should click', () => {

      })
    })
  })

  describe('Template', () => {

    it(`should have as title 'todos'`, () => {
      expect(component.title).toBeTruthy();
      //toEqual('todos')
    });

    it('should display message', () => {
      const messageElement = fixture.debugElement.query(By.css('.c-app__message')).nativeElement as HTMLElement;
      expect(messageElement.textContent).toBe('The light is Off');
    });
  })

});
