import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};
@Injectable({
  providedIn: 'root'
})
export class WebRequestService {


  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000';
  }
  get(uri: string){
   return this.http.get(`${this.ROOT_URL}/${uri}`,optionRequete);
  }

  post(uri: string,payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }

  patch(uri: string,payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
  login(email: string , password: string){
    return this.http.post(`${this.ROOT_URL}/user/login`,{
      email,
      password
    },{
      observe: 'response'
    });

  }
}
