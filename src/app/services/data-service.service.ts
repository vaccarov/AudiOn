import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/data';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<Data[]> {
    return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((results: Data[]) => results.slice(0, 100))
      );
  }
}
