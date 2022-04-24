import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private webService: WebRequestService, private router: Router) { }
  login (email: string, password: string){
    return this.webService.login(email,password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>)=>{
        //the auth tokens will be in the header of this response
        if(res.body.user.type =='admin' || res.body.user.type =='complexeowner' ) 
        {
          this.setSession(res.body.user,res.body.token);}
       
      })
    )
  }
  logout(){
    this.removeSession();
  }
  getAccessToken(){
    return localStorage.getItem('token');
  }
  setAccessToken(accessToken: string){
    localStorage.setItem('token',accessToken)
  }
  private setSession(userId: string , accessToken: string ){

    localStorage.setItem('user', JSON.stringify(userId));
    localStorage.setItem('token',accessToken);
    
  }
  private removeSession(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');

  }
  
}
