import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getAllBeneficiaries } from 'src/app/store/selectors/beneficiary.selectors';
import { initialState } from 'src/tests/mocks/states.mocks';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoAccessListGuard } from './no-access-list.guard';

describe('NoAccessListGuard', () => {
  let store: MockStore;
  let guard: NoAccessListGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NoAccessListGuard, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(NoAccessListGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation if all beneficiaries saved', () => {
    store.overrideSelector(getAllBeneficiaries, [
      { fullname: 'John Smith', relationship: 'Hijo', percentage: 100 },
    ]);

    expect(guard.canActivate()).toBeTruthy();
  });
});
