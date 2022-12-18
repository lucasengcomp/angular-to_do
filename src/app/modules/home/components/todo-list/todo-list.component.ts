import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [
    { task: "Minha nova task", checked: true },
    { task: "Minha nova task 2", checked: false },
    { task: "Minha nova task 3", checked: true },
  ];

  constructor() { }

  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
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

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
