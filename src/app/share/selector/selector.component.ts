import { Component, OnInit, Input } from '@angular/core';
import { Options } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.sass']
})
export class SelectorComponent implements OnInit {

  @Input('name') name;
  @Input('options') options:String[];

  constructor() { }

  ngOnInit() {
  }

}
