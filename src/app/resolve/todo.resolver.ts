import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoService } from '../services/todo.service';

export interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoResolver implements Resolve<Todo[]> {
  constructor(private todoService: TodoService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<Todo[]> {
    //2 farklı servisten veri alıp tek bir dto ile geri döndürebiliriz.
    return this.todoService.getTodos();
  }
}
