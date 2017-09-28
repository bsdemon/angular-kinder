import { Component, OnInit, Input } from '@angular/core';
import { Books } from './../../books';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  @Input('books') books: Books;

  constructor() { }

  ngOnInit() {
  }

}
