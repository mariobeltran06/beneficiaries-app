import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { initialState } from 'src/tests/mocks/states.mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { TableBeneficiariesComponent } from '../table-beneficiaries/table-beneficiaries.component';
import { LayoutTableComponent } from './layout-table.component';

describe('LayoutTableComponent', () => {
  let component: LayoutTableComponent;
  let fixture: ComponentFixture<LayoutTableComponent>;
  let loader: HarnessLoader;
  let loaderRoot: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutTableComponent, TableBeneficiariesComponent],
      imports: [
        MatDialogModule,
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule
      ],
      providers: [provideMockStore({ initialState: initialState })],
    });
    fixture = TestBed.createComponent(LayoutTableComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    loaderRoot = TestbedHarnessEnvironment.documentRootLoader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-table-beneficiaries', () => {
    const element = fixture.nativeElement.querySelector(
      'app-table-beneficiaries'
    );
    expect(element).toBeTruthy();
  });

  it('should load all buttons harnesses', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(1);
  });

  it('should render card', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe('Beneficiarios');
  });
  
});
