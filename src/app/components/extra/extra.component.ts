import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

export interface Name{
  name:string;
  surname?:string;
 
}
export interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})


export class ExtraComponent implements OnInit {
  count=0;
  interval:any;
  data:Post[]=[];
  data2$:Observable<Post[]> |undefined;
  names:any[]=[
    {
    name:"",
    },
    {
      name:"bb",
      }
  ]

  @ViewChild('div1',{static:true }) div1!:ElementRef;
  counter: number=0;
//static:false: component init olduktan sonra ilk süreçte elementi sayfaya yükle
//default: static:false
  constructor(private renderer:Renderer2, private http:HttpClient, private counterService:CounterService) { 
    
  }
//Angular Component LifeCycle
//OnInit, AfterViewInit, ngDestory, ngOnChanges
subjectOnInit(){
//TODO Behavior subject
this.counterService.getCount().subscribe(count=>{
  this.counter=count;
});
}
  ngOnInit(): void {
    //TODO Behavior subject
    this.subjectOnInit();

    this.renderer.setStyle(this.div1.nativeElement, 'color','blue');
    this.div1.nativeElement.style.backgroundColor='yellow';

    /*this.interval=setInterval(()=>{
      this.count++;
      console.log('counter',this.count);
    });*/
    var a=this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
     a.subscribe();
    //console.log("sss",  a.subscribe);
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe
    (response=>{
      console.log('res',response);
     this.data =response;
    });
    //TODO Alltaki daha uygun
    this.data2$=this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    //console.log('res2',this.data2$);
    
    //console.log('res 2',this.loadTodos());
  }
  getTodos():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
 }
 loadTodos(){
  this.getTodos().subscribe(res=>{
    //console.log('res33',res);
    this.data =res;
  });
};
ngOnDestroy(): void {
  console.log("Dom kalktı");
  clearInterval(this.interval); //2.ders 104dk
}
loadTodo(){
  //this.todoService.fetchTodo().subscribe();
}
increase(){
 this.counterService.increase();
}
decrease(){
 this.counterService.decrease();
}
reset(){
  this.counterService.reset();
 }

  trackByFn(value:any){
    console.log("value", value);
  }

  //Performans açısından bu daha iyi
// this.subs=this.todoService.getTodos().pipe(take(1)).subscribe(res=>{
// });
// }
// ngOnDestroy():void{
// this.subs?.unsubscribe();
// }

// this.subs=this.todoService.getTodos().pipe(take(1)).subscribe(res=>{
//    alert('count:+res.length)
//    alert('count:${res.length}');// backticks
// });                            

//HTML olarak direk kullanabiliriz.
// const temp=`<div>
//    <p>
//      ${this.count}
//    </p>
//  </div>`}

// initial state[]olsun
// BehaviorSubject nesne üzerinde bir değişimde takip edebileceğimiz formatta döndü.
//todoTracker new BehaviorSubject<Todo[]>[[]);

    //constructor(private http:HttpClient){}
    // get Todos(){
    // return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    // }
//   loadTodo():Observable<Todo[]>{
//  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(res=>{
//    this.todoTracker.next(res);// todoTracker içerisine attık.
//   })I
//  return this.todoTracker.asObservable();


}
