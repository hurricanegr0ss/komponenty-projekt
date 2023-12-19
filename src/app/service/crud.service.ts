import { Zlecenie } from './../model/zlecenie';
import { Telefon } from '../model/telefon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private serviceURLzlecenie: string = "http://localhost:3000/zlecenia";
  private serviceURLtelefon: string = "http://localhost:3000/telefony";

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    console.error('Wystąpił błąd:', error);
    return throwError('Wystąpił błąd. Spróbuj ponownie.');
  }

  addZlecenie(zlecenie: Zlecenie): Observable<Zlecenie> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Zlecenie>(this.serviceURLzlecenie, zlecenie, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllZlecenia(): Observable<Zlecenie[]> {
    return this.http.get<Zlecenie[]>(this.serviceURLzlecenie)
      .pipe(catchError(this.handleError));
  }

  deleteZlecenie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceURLzlecenie}/${id}`)
      .pipe(catchError(this.handleError));
  }

  editZlecenie(zlecenie: Zlecenie): Observable<Zlecenie> {
    return this.http.put<Zlecenie>(`${this.serviceURLzlecenie}/${zlecenie.id}`, zlecenie)
      .pipe(catchError(this.handleError));
  }

  addTelefon(telefon: Telefon): Observable<Telefon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Telefon>(this.serviceURLtelefon, telefon, httpOptions)
      .pipe(catchError(this.handleError));
  }

  getAllTelefony(): Observable<Telefon[]> {
    return this.http.get<Telefon[]>(this.serviceURLtelefon)
      .pipe(catchError(this.handleError));
  }

  deleteTelefon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.serviceURLtelefon}/${id}`)
      .pipe(catchError(this.handleError));
  }

  editTelefon(telefon: Telefon): Observable<Telefon> {
    return this.http.put<Telefon>(`${this.serviceURLtelefon}/${telefon.id}`, telefon)
      .pipe(catchError(this.handleError));
  }

  getTelefonById(id: number): Observable<Telefon> {
    return this.http.get<Telefon>(`${this.serviceURLtelefon}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
