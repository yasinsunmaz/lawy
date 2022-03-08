import { Component, OnInit } from '@angular/core';

class Todo {
  title: String = ''
  description: String = ''
  list: [any]
  checked: Boolean = false
  date: number = Date.now()
}
@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})

export class LocalStorageComponent implements OnInit {
  //TODO: Local Storage Kullanımı
  newTask: Todo = new Todo()
  dateString: string = ''
  collection: [Todo] = JSON.parse(localStorage.getItem('posts'))

  constructor() { }

  ngOnInit(): void {
  }

  getPosts() {
    this.collection = JSON.parse(localStorage.getItem('posts'));
    return this.collection;
  }

  addItem() {
    if (!this.newTask.list) this.newTask.list = ['']
    else this.newTask.list.push('')
  }

  trackByFn(item, id) {
    return item
  }

  newTaskFn() {
    if (!this.newTask.title) return alert('Başlık boş geçilemez!')
    if (this.dateString) this.newTask.date = new Date(this.dateString).valueOf()
    if (!this.collection) this.collection = [JSON.parse(JSON.stringify(this.newTask))]
    else this.collection.push(JSON.parse(JSON.stringify(this.newTask)))
    this.collection.sort((a, b) => {
      return b.date - a.date
    })
    localStorage.setItem('posts', JSON.stringify(this.collection))
    this.newTask = new Todo()
    this.dateString = ''
  }

  updateCollection() {
    localStorage.setItem('posts', JSON.stringify(this.collection))
  }

  deleteTask(i: number) {
    this.collection.splice(i, 1)
    this.updateCollection()
  }

}
