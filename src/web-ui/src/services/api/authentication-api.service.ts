import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../../models/user-profile.model';
import { APP_BASE_URL, APP_V1_URL } from '../../app/app.consts';
import { ActivationRequest, AuthenticationRequest } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {
  private AUTH_URL = APP_BASE_URL + APP_V1_URL + '/auth';

  constructor(private http: HttpClient) {}

  public signinUser(request: AuthenticationRequest) {
    return this.http.post<JwtTokenResponse>(this.AUTH_URL, request);
  }

  public activate(request: ActivationRequest) {
    return this.http.post<JwtTokenResponse>(`${this.AUTH_URL}/activation`, request);
  }

  public resendActivationEmail(login: string) {
    return this.http.post<JwtTokenResponse>(`${this.AUTH_URL}/resend-activation-email`, login);
  }

  public getMyself() {
    const url = this.AUTH_URL + '/myself';
    return this.http.get<MyselfResponse>(url);
  }

  public logout() {
    const url = this.AUTH_URL + '/invalidate';
    return this.http.post<void>(url, {});
  }
}

export interface JwtTokenResponse {
  jwt: string;
  username: string;
  authorities: string[];
}

export interface MyselfResponse {
  userProfile: UserProfile;
  authorities: string[];
}
