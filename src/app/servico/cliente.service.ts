import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Url da API
  private url:string = 'http://localhost:8080';

  // Responsável pelas requisições da API
  constructor(private http:HttpClient) { }
}
 