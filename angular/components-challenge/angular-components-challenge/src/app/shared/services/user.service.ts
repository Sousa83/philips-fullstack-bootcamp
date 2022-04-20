import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../interfaces/models/user';
import { IServiceModule } from '../interfaces/ServiceModule';

@Injectable({
  providedIn: 'root',
})
export class UserService implements IServiceModule<User> {
  private serviceUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  index(): Observable<User[]> {
    return this.httpClient.get<Array<User>>(this.serviceUrl);
  }

  // show(id: number): Observable<User> {}

  // save(id?: number): Observable<User> {}

  // delete(id: number): Observable<any> {}
}
