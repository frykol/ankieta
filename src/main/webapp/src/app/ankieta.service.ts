import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ankieta } from './ankieta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnkietaService {
  private ApiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllAnkieta(): Observable<Ankieta[]>{
    return this.http.get<Ankieta[]>(`${this.ApiUrl}/ankieta/all`);
  }

  public getAnkietaById(ankietaId: number): Observable<Ankieta>{
    return this.http.get<Ankieta>(`${this.ApiUrl}/ankieta/find/${ankietaId}`);
  }

  public addAnkieta(ankieta: Ankieta): Observable<Ankieta>{
    return this.http.post<Ankieta>(`${this.ApiUrl}/ankieta/add`, ankieta);
  }

  public updateAnkieta(ankieta: Ankieta): Observable<Ankieta>{
    return this.http.put<Ankieta>(`${this.ApiUrl}/ankieta/add`, ankieta);
  }

  public deleteAnkieta(ankietaId: number): Observable<void>{
    return this.http.delete<void>(`${this.ApiUrl}/ankieta/del/${ankietaId}`);
  }
}
