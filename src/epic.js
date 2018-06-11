import 'rxjs';
import { combineEpics } from 'redux-observable';
import { FETCH_USER, FETCH_VEHICLES } from './constants';
import { fetchVehiclesSuccess, fetchVehiclesFailed } from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';

const URL = 'http://localhost:4567/api/cars'
export const fetchVehicles = actions$ =>
  actions$
    .ofType(FETCH_VEHICLES)
    .mergeMap(action =>
      ajax(URL)
        .map(vehicles => fetchVehiclesSuccess(vehicles.response))
        .takeUntil(actions$.ofType(FETCH_VEHICLES))
        .retry(2)
        .catch(error => Observable.of(fetchVehiclesFailed()))
    );


export default combineEpics(
  fetchVehicles
);