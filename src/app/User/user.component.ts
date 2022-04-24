import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/task.service';
import { User } from 'app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public listUser :User[];
  public useritem :User=new User();

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTournamentList().subscribe((res)=>{
      this.listUser=res as User[];
    })
  }
  delete(id:string){
    this.taskService.deleteUser(id).subscribe((result)=>{
      console.log(id);
      let index =this.listUser.findIndex(res=>res._id==id);
      this.listUser.splice(index,1);
    })
  }

}
