import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonyService {
  private dostepneImeiSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  dostepneImei$: Observable<string[]> = this.dostepneImeiSubject.asObservable();

  constructor() { }

  setDostepneImei(dostepneImei: string[]): void {
    this.dostepneImeiSubject.next(dostepneImei);
  }

  getDostepneImei(): Observable<string[]> {
    return this.dostepneImei$;
  }
}
