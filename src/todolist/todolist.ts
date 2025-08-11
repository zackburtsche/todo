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
  {name: new FormControl}
)


changeDone(index:any){
  this.dataService.todos[index].done = !this.dataService.todos[index].done;
  this.saveToLocalStorage();
}

submitAddToDoForm(){
  let test = String(this.myForm.controls.name.value);
  let newToDo = {name:test, done:false}
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
