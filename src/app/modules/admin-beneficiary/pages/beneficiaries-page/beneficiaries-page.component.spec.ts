import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { LayoutTableComponent } from '../../components/layout-table/layout-table.component';
import { TableBeneficiariesComponent } from '../../components/table-beneficiaries/table-beneficiaries.component';
import { BeneficiariesPageComponent } from './beneficiaries-page.component';

describe('BeneficiariesPageComponent', () => {
  let component: BeneficiariesPageComponent;
  let fixture: ComponentFixture<BeneficiariesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeneficiariesPageComponent, LayoutTableComponent, TableBeneficiariesComponent],
      imports: [MatDialogModule, NoopAnimationsModule, MatCardModule],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(BeneficiariesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div container-table', () => {
    const element = fixture.nativeElement.querySelector('.container-table');
    expect(element).toBeTruthy();
  });

  it('should render app-layout-form', () => {
    const element = fixture.nativeElement.querySelector('app-layout-table');
    expect(element).toBeTruthy();
  });
});
