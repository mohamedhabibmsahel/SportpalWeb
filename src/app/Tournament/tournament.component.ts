import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/task.service';
import { Tournament } from 'app/models/Tournament';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  displayOn:boolean =true;
  public listTournament :Tournament[];
  public touranamentitem :Tournament=new Tournament();
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTournamentList().subscribe((res)=>{
      this.listTournament=res as Tournament[];
    })

  }

  savetournament(){
   this.taskService.saveTournament(this.touranamentitem).subscribe(
     (result)=>{
       console.log(result);
      this.listTournament.push(this.touranamentitem);
      this.reverseCase();
     }
   );

  }
  reverseCase(){
    this.displayOn=!this.displayOn;
  }
  delete(id:string){
    this.taskService.deleteTournament(id).subscribe((result)=>{
      console.log(id);
      let index =this.listTournament.findIndex(res=>res._id==id);
      this.listTournament.splice(index,1);
    })
  }
}
