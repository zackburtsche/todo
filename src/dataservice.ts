import { Injectable } from '@angular/core';

interface todo {
  name:string, dueDate:string, done:boolean
}

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  
  todos:Array<todo> = [
    {name:"Mow the lawn", dueDate:new Date().toDateString(), done:false}
  ];
  jsonString:any = '';

  constructor(){
    this.jsonString = localStorage.getItem("ZacksTodoArray");
    if(this.jsonString){
      this.todos = JSON.parse(this.jsonString);
    }
  }

}
