import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../Models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  url = 'http://localhost:4000/api/personaje/';

  constructor(private http: HttpClient) { }


  getPersonajes(): Observable<any>{
    return this.http.get(this.url);
  }

  deletePersonaje(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  } 

  postPersonajes(personaje: Personaje): Observable<any>{
    return this.http.post(this.url, personaje);
  }

  getPersonaje(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }

  putPersonaje(id: string, personaje: Personaje): Observable<any>{
    return this.http.put(this.url + id, personaje)
  }
}
