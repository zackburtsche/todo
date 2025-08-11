import { Routes } from '@angular/router';
import { Todolist } from '../todolist/todolist';
import { Welcome } from '../welcome/welcome';

export const routes: Routes = [
    {path:'', component: Welcome},
    {path: 'todolist', component: Todolist}
];
