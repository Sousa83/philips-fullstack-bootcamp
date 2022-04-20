import { Observable } from 'rxjs';

export interface IServiceModule<T> {
  index(): Observable<Array<T>>;
}
