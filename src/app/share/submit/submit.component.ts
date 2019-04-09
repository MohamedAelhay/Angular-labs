import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.sass']
})
export class SubmitComponent implements OnInit {

  @Input('text') text;
  @Output() notifyParent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.notifyParent.emit();
  }
}
