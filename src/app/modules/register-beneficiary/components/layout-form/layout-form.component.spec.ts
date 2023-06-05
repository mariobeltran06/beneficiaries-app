import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBeneficiaryComponent } from '../form-beneficiary/form-beneficiary.component';
import { LayoutFormComponent } from './layout-form.component';

describe('LayoutFormComponent', () => {
  let component: LayoutFormComponent;
  let fixture: ComponentFixture<LayoutFormComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutFormComponent, FormBeneficiaryComponent],
      imports: [MatCardModule, ReactiveFormsModule, MatIconModule],
      providers: [provideMockStore()]
    });
    fixture = TestBed.createComponent(LayoutFormComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-form-beneficiary', () => {
    const element = fixture.nativeElement.querySelector('app-form-beneficiary');
    expect(element).toBeTruthy();
  });

  it('should render card', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe('Registrar Beneficiarios');
  });
});
