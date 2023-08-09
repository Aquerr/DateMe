import { Injectable } from '@angular/core';
import { APP_BASE_URL, APP_V1_URL } from '../../app/app.consts';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../../models/reservation.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {
  private URL = APP_BASE_URL + APP_V1_URL + '/reservations';

  constructor(private http: HttpClient) {
  }

  public createNewReservation(request: Reservation) {
    return this.http.post<ReservationResponse>(this.URL, request);
  }

}

export interface ReservationResponse {
  reservation: Reservation;
}
