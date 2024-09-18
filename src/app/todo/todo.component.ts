import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
   todoArr:Array<string> = ['Typescript', 'SASS','Javascript', 'Angular']
   @ViewChild('todoItem') todoItem! :ElementRef;
  //  it is property decorator it is used to create a component on class
  constructor() { }

  ngOnInit(): void {
  }
  ontodoAdd(){
   this.todoArr.push(this.todoItem.nativeElement.value);
   //this todo item value push in array
  }

}
