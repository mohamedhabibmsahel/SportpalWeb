import { Injectable } from '@angular/core';
import { Tournament } from './models/Tournament';
import { User } from './user';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  loginUser(user: User){
    // we want to send web request to create somthing 
    return this.webReqService.post('user/login',user);
  }
  getfootballnewlist(){
    // we want to send web request to create somthing 
    return this.webReqService.get('news/Football');
  }
  gettennisnewlist(){
    // we want to send web request to create somthing 
    return this.webReqService.get('news/Tennis');
  }
  getTournamentList(){
    return this.webReqService.get('tournament/')
  }
  saveTournament(item:Tournament){
    return this.webReqService.post('tournament/addtournament',item);
  }
  deleteTournament(id:string){
    return this.webReqService.delete('tournament/'+id);
  }
  getUserList(){
    return this.webReqService.get('user/')
  }
  deleteUser(id:string){
    return this.webReqService.delete('user/'+id);
  }
}
