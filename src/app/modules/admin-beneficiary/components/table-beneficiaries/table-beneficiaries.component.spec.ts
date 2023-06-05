import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatTableHarness } from '@angular/material/table/testing';
import { initialState } from 'src/tests/mocks/states.mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { TableBeneficiariesComponent } from './table-beneficiaries.component';

describe('TableBeneficiariesComponent', () => {
  let component: TableBeneficiariesComponent;
  let fixture: ComponentFixture<TableBeneficiariesComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableBeneficiariesComponent],
      imports: [MatTableModule, MatDividerModule],
      providers: [
        provideMockStore({
          initialState: initialState,
        }),
      ],
    });
    fixture = TestBed.createComponent(TableBeneficiariesComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load harness for a table', async () => {
    const tables = await loader.getAllHarnesses(MatTableHarness);
    expect(tables.length).toBe(1);
  });
});
