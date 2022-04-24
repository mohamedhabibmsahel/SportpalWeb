import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'app/task.service';

@Component({
  selector: 'app-footballist',
  templateUrl: './footballist.component.html',
  styleUrls: ['./footballist.component.css']
})
export class FootballistComponent implements OnInit {
  @Input() footballProperty;
  data:Object[];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getfootballnewlist().subscribe((respnse: any) => {
      {
        this.data = respnse.filter((data,index)=>index<10);

      }
    })
  }

}
