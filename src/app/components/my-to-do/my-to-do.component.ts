import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/service/to-do.service';


interface myToDo {
  task: string;
  time: number;
  isCompleted: boolean;
}

@Component({
  selector: 'app-my-to-do',
  templateUrl: './my-to-do.component.html',
  styleUrls: ['./my-to-do.component.scss']
})
export class MyToDoComponent implements OnInit {

  listItem = '';
  sortBy: 'create' | 'complete' | null = null;
  recentData = '';

  constructor(public service: ToDoService) { }

  ngOnInit(): void {
    this.service.getStorage();
  }

  addToList() {
    let todoData: myToDo = {
      task: this.listItem,
      time: Date.now(),
      isCompleted: false,
    };
    this.service.addToList(todoData);
    this.listItem = '';
    this.sortBy = null;
  }

  markComplete(targetItem: myToDo) {
    this.service.markCompleteToList(targetItem);
  }

  deleteItem(targetItem: myToDo) {
    this.service.deletItemFromList(targetItem);
  }

  sortByComplete() {
    this.sortBy = 'complete';
  }
  sortByCreate() {
    this.sortBy = 'create';
  }
}
