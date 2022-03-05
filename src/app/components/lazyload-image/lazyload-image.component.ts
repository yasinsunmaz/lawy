import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyload-image',
  templateUrl: './lazyload-image.component.html',
  styleUrls: ['./lazyload-image.component.css']
})
export class LazyloadImageComponent implements OnInit {
  //TODO: Lazyload Image Kullanımı
  image1 = "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg";
  image2 = "https://images.pexels.com/photos/4636525/pexels-photo-4636525.jpeg";
  image3 = "https://images.pexels.com/photos/9719999/pexels-photo-9719999.jpeg"
  image4 = "https://images.pexels.com/photos/11180708/pexels-photo-11180708.jpeg";

  defaultImage = "https://via.placeholder.com/1000/09f/fff.png";
  constructor() { }

  ngOnInit(): void {
  }

}
