import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl: string;
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;  
    this.apiUrl = `${this.myAppUrl}api/persona`;  
  }

  obtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  actualizarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${persona.id}`, persona);
  }

  eliminarPersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
