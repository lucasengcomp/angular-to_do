import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Minha nova task", checked: true },
    { task: "Minha nova task 2", checked: false },
    { task: "Minha nova task 3", checked: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm  = window.confirm("Deseja remover todas as tarefas?");

    if (confirm == true) {
      this.taskList = [];
    }
  }
}
