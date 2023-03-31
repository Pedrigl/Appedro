import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = `https://apipedro.azurewebsites.net/api/Clientes`;
  constructor(private http: HttpClient) { }

  getClienteByPhone(TELEFONE: string): Observable<Cliente>{
    const apiurl = `${this.url}?telefone=${TELEFONE}`;
    return this.http.get<Cliente>(apiurl);
  }

  createCliente(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url,Cliente,httpOptions);
  }

  updateCliente(Id: number, cliente: Cliente): Observable<Cliente>{
    const apiurl = `${this.url}?Id=${Id}`;
    return this.http.put<Cliente>(apiurl,cliente,httpOptions);
  }

  deleteCliente(Id: number): Observable<number>{
    const apiurl = `${this.url}?Id=${Id}`;
    return this.http.delete<number>(apiurl,httpOptions);
  }
}
