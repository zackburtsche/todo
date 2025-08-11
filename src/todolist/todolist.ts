import { Component, inject } from '@angular/core';
import { Dataservice } from '../dataservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-todolist',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {

dataService = inject(Dataservice);

myForm = new FormGroup(
  {name: new FormControl, dueDate:new FormControl}
)


changeDone(index:any){
  this.dataService.todos[index].done = !this.dataService.todos[index].done;
  this.saveToLocalStorage();
}

submitAddToDoForm(){
  let name = String(this.myForm.controls.name.value);
  let date = new Date(this.myForm.controls.dueDate.value).toDateString();
  let newToDo = {name:name, done:false, dueDate:date}
  this.dataService.todos.push(newToDo);
  this.saveToLocalStorage();
}

deleteToDo(index:any){
  this.dataService.todos.splice(index, 1);
  this.saveToLocalStorage();
}

saveToLocalStorage(){
    const jsonArray = JSON.stringify(this.dataService.todos);
    localStorage.setItem('ZacksTodoArray', jsonArray);
}

}
