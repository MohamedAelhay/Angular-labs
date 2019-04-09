import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { LecOneService } from '../lec-one.service';

@Component({
  selector: 'app-learning-form',
  templateUrl: './learning-form.component.html',
  styleUrls: ['./learning-form.component.sass']
})
export class LearningFormComponent implements OnInit {

  // public userData: Form;
  user = new Form;
  
  submitted = false
  
  constructor(private httpTest: LecOneService) {
    this.httpTest.setUrl('https://jsonplaceholder.typicode.com/todos/1')
   }

  ngOnInit() {
  }

  onSubmit(e){
    console.log(e)
    alert("Name: " + e.value['name'] + "  " + "Password: " + e.value['password'])
    this.httpTest.getUrl().subscribe(res=>{
      console.log(res)
    })
    // alert("e.name, e.password")
  }
}
