import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBeneficiariesComponent } from './table-beneficiaries.component';

describe('TableBeneficiariesComponent', () => {
  let component: TableBeneficiariesComponent;
  let fixture: ComponentFixture<TableBeneficiariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBeneficiariesComponent]
    });
    fixture = TestBed.createComponent(TableBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
