import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: any = [];

  constructor(private api: APIService) {

  }

  ngOnInit() {
    this.api.getTodos().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    });
  }

}
