import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.sass']
})
export class RegComponent implements OnInit {

  options:String[] = ['male', 'female']

  constructor() { }

  ngOnInit() {
  }

  regNotify(){
    alert('Reg')
  }
}
