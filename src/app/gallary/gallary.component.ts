import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.sass']
})
export class GallaryComponent implements OnInit {

  public title:string = "Gallary"
  
  showMyName(){
    alert("Mohamed A. Elhay")
  }

  constructor() { }

  ngOnInit() {
  }

}
