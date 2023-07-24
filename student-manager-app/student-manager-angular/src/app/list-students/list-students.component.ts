import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
    title : string = "Lista studentów";
    new_title = "Nowa lista studentów";
    isTextDisplayed : boolean = false;
    collapseText = "Pokaż";
    students : Student[] = [];
    isLoadingComplete = false;

    constructor(private studentService : StudentService){
      this.getData();
    }

    getData(){
      console.log("Przed wywolaniem studentService");
      this.studentService.getStudents().pipe(delay(2000)).subscribe(data=>{
        this.students = data;
        console.log("Wewnatrz subscribe ");
        this.isLoadingComplete = true;
      });
      console.log("Po wywolaniu studentService");
    }

    handleClick(){
      console.log("Kliknięto w przycisk");
      this.title = "Zmieniona lista studentów";
      this.isTextDisplayed = !this.isTextDisplayed;
      if (this.isTextDisplayed){
        this.collapseText = "Ukryj"
      } else {
        this.collapseText = "Pokaż";
      }
    }
}
