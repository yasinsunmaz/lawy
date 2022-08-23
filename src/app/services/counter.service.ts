import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterTracker=new BehaviorSubject<number>(0);
  constructor(){}

  //actionlar ile state güncelleniyor
  increase():void{
    this.counterTracker.next(this.counterTracker.value+1);
  }
  counter(counter: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
  decrease():void{
    this.counterTracker.next(this.counterTracker.value-1);
  }
  reset():void{ 
    this.counterTracker.next(0);
  }
  //güncel state bağlanmamızı sağlayan reducer.
  getCount():Observable<number>{
    return this.counterTracker.asObservable();
  }
}
