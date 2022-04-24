import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/task.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  data: Object[]=[];
  datafoot: Object[]=[];
  datatennis: Object[]=[];


  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.gettennisnewlist().subscribe((respnse: any) => {
      {
        this.taskService.getfootballnewlist().subscribe((response: any) => {
          {
            this.data= shuffle([...respnse,...response]);
    
          }
        })

      }
    });
    
  
  }


}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}