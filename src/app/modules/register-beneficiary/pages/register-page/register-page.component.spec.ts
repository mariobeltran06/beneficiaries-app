import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBeneficiaryComponent } from '../../components/form-beneficiary/form-beneficiary.component';
import { LayoutFormComponent } from '../../components/layout-form/layout-form.component';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterPageComponent,
        LayoutFormComponent,
        FormBeneficiaryComponent,
      ],
      imports: [MatCardModule, ReactiveFormsModule, MatIconModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div container', () => {
    const element = fixture.nativeElement.querySelector('.container');
    expect(element).toBeTruthy();
  });

  it('should render app-layout-form', () => {
    const element = fixture.nativeElement.querySelector('app-layout-form');
    expect(element).toBeTruthy();
  });
});
