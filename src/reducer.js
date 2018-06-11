import { FETCH_VEHICLES, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_FAIL } from './constants';
import {combineReducers} from 'redux';
import { createStore } from 'redux';

const initialState = [];

export const vehicles = (state = initialState, action) => {
    switch(action) {
        case FETCH_VEHICLES_SUCCESS:
            return action.payload.vehicles;
        case FETCH_VEHICLES_FAIL:
            return [];
        default:
            return state;
    }
}

export default combineReducers({
    vehicles
  });

export const vehicleStore = createStore(vehicles);