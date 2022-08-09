import { Injectable } from '@angular/core';

interface myToDo {
    task: string;
    time: number;
    isCompleted: boolean;
}
@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    lists: myToDo[] = [];

    constructor() { }

    get listsData() {
        return this.lists
    }


    addToList(item: myToDo) {
        console.log(item)
        this.lists = [...this.lists, item];
        this.updateStorage(this.lists);
    }

    markCompleteToList(todoItem: myToDo) {
        this.lists = this.lists.map((item, index) => {
            if (item.time === todoItem.time) {
                item.isCompleted = !todoItem.isCompleted;
            }
            return item;
        });
        this.updateStorage(this.lists);
    }

    deletItemFromList(todoItem: myToDo) {
        this.lists = this.lists.filter(i => i.time !== todoItem.time)
        this.updateStorage(this.lists);
    }

    updateStorage(arr: myToDo[]) {
        localStorage.setItem('myTodo', JSON.stringify(arr));
    }

    getStorage(): void {
        try {
            this.lists = JSON.parse(localStorage.getItem('myTodo') as string)
                ? JSON.parse(localStorage.getItem('myTodo') as string)
                : [];
        } catch (e) { }
    }
}