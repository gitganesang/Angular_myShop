import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

interface myToDo {
  task: string;
  time: number;
  isCompleted: boolean;
}

@Component({
  selector: 'app-my-to-do-list',
  templateUrl: './my-to-do-list.component.html',
  styleUrls: ['./my-to-do-list.component.scss']
})
export class MyToDoListComponent implements OnInit, OnChanges {

  @Input() lists: myToDo[] = [];
  @Input() sortBy: 'create' | 'complete' | null = null;

  @Output() makCompleteEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  markCompleteAction(item: myToDo) {
    this.makCompleteEvent.emit(item)
  }
  deleteItemAction(item: myToDo) {
    this.deleteEvent.emit(item)
  }

}
