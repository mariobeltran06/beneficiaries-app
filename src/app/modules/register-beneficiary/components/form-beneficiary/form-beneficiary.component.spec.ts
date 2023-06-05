import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatDividerHarness } from '@angular/material/divider/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectHarness } from '@angular/material/select/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RELATIONSHIP_ITEMS } from 'src/app/modules/core/constants/relationship-items.constant';
import { provideMockStore } from '@ngrx/store/testing';
import { FormBeneficiaryComponent } from './form-beneficiary.component';

describe('FormBeneficiaryComponent', () => {
  let component: FormBeneficiaryComponent;
  let fixture: ComponentFixture<FormBeneficiaryComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBeneficiaryComponent],
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatDividerModule,
      ],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(FormBeneficiaryComponent);
    component = fixture.componentInstance;
    component.itemsRelationship = RELATIONSHIP_ITEMS;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all input generate 1 beneficiary', async () => {
    component.addBeneficiary();
    fixture.detectChanges();
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(2);
  });

  it('should load all input generate 2 beneficiaries', async () => {
    for (let i = 0; i < 2; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(4);
  });

  it('should load all input generate 3 beneficiaries', async () => {
    for (let i = 0; i < 3; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(6);
  });

  it('should load all input generate 4 beneficiaries', async () => {
    for (let i = 0; i < 4; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(8);
  });

  it('should load all input generate 5 beneficiaries', async () => {
    for (let i = 0; i < 5; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(10);
  });

  it('should load all select generate 1 beneficiary', async () => {
    component.addBeneficiary();
    fixture.detectChanges();
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(1);
  });

  it('should load all select generate 2 beneficiaries', async () => {
    for (let i = 0; i < 2; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(2);
  });

  it('should load all select generate 3 beneficiaries', async () => {
    for (let i = 0; i < 3; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(3);
  });

  it('should load all select generate 4 beneficiaries', async () => {
    for (let i = 0; i < 4; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(4);
  });

  it('should load all select generate 5 beneficiaries', async () => {
    for (let i = 0; i < 5; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(5);
  });

  it('should load all dividers generate 5 beneficiaries', async () => {
    for (let i = 0; i < 5; i++) {
      component.addBeneficiary();
    }
    fixture.detectChanges();
    const dividers = await loader.getAllHarnesses(MatDividerHarness);
    expect(dividers.length).toBe(4);
  });

  it('should load all buttons no beneficiaries', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(2);
  });
});
