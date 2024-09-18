import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component implements OnInit {
  todoArr:Array<string> = ['Typescript', 'SASS','Javascript', 'Angular']
  constructor() { }

  ngOnInit(): void {
  }

  ontodo1Add(ele:HTMLInputElement){
  //  console.log(ele.value)
   this.todoArr.push(ele.value)
  }
}
