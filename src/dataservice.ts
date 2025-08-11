import { Injectable } from '@angular/core';

interface todo {
  name:string, done:boolean
}

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  
  todos:Array<todo> = [];
  jsonString:any = '';

  constructor(){
    this.jsonString = localStorage.getItem("ZacksTodoArray");
    this.todos = JSON.parse(this.jsonString);
  }

}
