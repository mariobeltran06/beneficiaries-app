import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatIconHarness } from '@angular/material/icon/testing';
import { MatInputModule } from '@angular/material/input';
import { MatInputHarness } from '@angular/material/input/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IDataDeleteDialog } from '../../interfaces/data-delete-dialog.interface';
import { DialogDeleteComponent } from './dialog-delete.component';

describe('DialogDeleteComponent', () => {
  let component: DialogDeleteComponent;
  let fixture: ComponentFixture<DialogDeleteComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<DialogDeleteComponent>>;
  let loader: HarnessLoader;

  const mockDialogData: IDataDeleteDialog = {
    title: 'hola',
    variable: 'hello',
    icon: 'delete',
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        DialogDeleteComponent,
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: spy },
      ],
    });
    fixture = TestBed.createComponent(DialogDeleteComponent);
    component = fixture.componentInstance;
    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<
      MatDialogRef<DialogDeleteComponent>
    >;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h2 title', () => {
    const element = fixture.nativeElement.querySelector('.title');
    expect(element).toBeTruthy();
    expect(element.textContent).toContain(mockDialogData.title);
  });

  it('should close the dialog', () => {
    component.sendAction();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should load button harnesses', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(1);
  });

  it('should load button with exact text', async () => {
    const buttons = await loader.getAllHarnesses(
      MatButtonHarness.with({ text: 'Reemplazar' })
    );
    expect(buttons.length).toBe(1);
    expect(await buttons[0].getText()).toBe('Reemplazar');
  });

  it('should load icon harnesses', async () => {
    const icons = await loader.getAllHarnesses(MatIconHarness);
    expect(icons.length).toBe(1);
  });

  it('should get the name of an icon', async () => {
    const icons = await loader.getAllHarnesses(MatIconHarness);
    const names = await parallel(() => icons.map(icon => icon.getName()));
    expect(names).toEqual([mockDialogData.icon]);
  });

  it('should load input harnesses', async () => {
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    expect(inputs.length).toBe(1);
  })

  it('should be able to set value of input', async () => {
    const inputs = await loader.getAllHarnesses(MatInputHarness);
    const input = inputs[0];
    expect(await input.getValue()).toBe('');

    await input.setValue('Beneficiarios');

    expect(await input.getValue()).toBe('Beneficiarios');
  });
});
