import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {

  @Input('type') type;
  @Input('name') name;
  @Input('label') label;

  constructor() { }

  ngOnInit() {
  }

}
