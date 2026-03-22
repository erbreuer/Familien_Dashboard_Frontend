import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

type ProfileResponse =
  | User
  | { user: User }
  | { data: User }
  | { profile: User }
  | { data: { user: User } };

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  private isUser(value: unknown): value is User {
    if (!value || typeof value !== 'object') {
      return false;
    }

    const candidate = value as Partial<User>;
    return (
      typeof candidate.id === 'number' &&
      typeof candidate.username === 'string' &&
      typeof candidate.first_name === 'string' &&
      typeof candidate.last_name === 'string'
    );
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/profile`);
  }
}