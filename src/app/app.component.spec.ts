import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './modules/shared/components/toolbar/toolbar.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, ToolbarComponent],
    declarations: [AppComponent],
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render router outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('should render toolbar', () => {
    const toolbar = fixture.nativeElement.querySelector('app-toolbar');
    expect(toolbar).toBeTruthy();
  });
});
