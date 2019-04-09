import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lec',
  templateUrl: './lec.component.html',
  styleUrls: ['./lec.component.sass']
})

export class LecComponent implements OnInit {

  @Input('name')  data ;
  @Input('value') data2 ;
  @Input('shaf3y') data3 ;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    console.log(this.data2);
    console.log(this.data3);

  }
}


/* 5 protocol for each communication 
  - Tcp
  - HttpRequest
  Search For The Rest
*/