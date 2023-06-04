import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.states';
import { beneficiaryReducers } from './beneficiary.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
    beneficiary: beneficiaryReducers,
};