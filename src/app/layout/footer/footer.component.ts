import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  githubLAWY() {
    window.open('https://github.com/yasinsunmaz/lawy', '_blank');
  }

  myWebsite() {
    window.open('https://yasinsunmaz.com', '_blank');
  }
}
