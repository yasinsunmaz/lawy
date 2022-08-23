import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/resolve/todo.resolver';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {
  
  todos:Todo[]=[];
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit():void{
    this.todos=this.activatedRoute.snapshot.data['todos'];
  }

}
