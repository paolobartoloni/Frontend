import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  /*URL= 'http://localhost:4200/sobremi/';*/
  URL= 'https://pmbbackend.onrender.com/sobremi/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Sobremi[]>{
    return this.httpClient.get<Sobremi[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Sobremi>{
    return this.httpClient.get<Sobremi>(this.URL + `detail/${id}`);
  }

  public save(sobremi: Sobremi): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', sobremi);
  }


  public update(id: number, sobremi: Sobremi): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, sobremi);

  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
