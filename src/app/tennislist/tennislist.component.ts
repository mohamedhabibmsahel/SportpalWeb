import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/task.service';

@Component({
  selector: 'app-tennislist',
  templateUrl: './tennislist.component.html',
  styleUrls: ['./tennislist.component.css']
})
export class TennislistComponent implements OnInit {

  data: Object[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    this.taskService.gettennisnewlist().subscribe((respnse: any) => {
      {
        this.data = respnse;

      }
    })
  }

}
