import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component implements OnInit {
  todoaddedvalue! : string;
  todoArr:Array<string> = ['Typescript', 'SASS','Javascript', 'Angular']
  constructor() { }

  ngOnInit(): void {
  }

  ontoAdd(){
  this.todoArr.push(this.todoaddedvalue);
  }
}
