import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  template: `
  <div class="header">
    <h2>Blog Name</h2>
  </div>

  <app-single-post></app-single-post>
  <app-right-side></app-right-side>
  
  <div class="footer">
    <h2 class="inside"></h2>
  </div>
  `,
  styleUrls: ['./first-page.component.css']})


export class FirstPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
