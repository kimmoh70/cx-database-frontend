import { FETCH_VEHICLES, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_FAIL } from './constants';

export const fetchVehicles = params => ({
  type: FETCH_VEHICLES,
  payload: { params }
});

export const fetchVehiclesSuccess = vehicles => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: { vehicles }
});

export const fetchVehiclesFailed = () => ({
  type: FETCH_VEHICLES_FAIL
});