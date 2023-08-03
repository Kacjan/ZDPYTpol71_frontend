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
    // 1) Napisać w StudentService obsługę wysyłania żądania DELETE
    // 2) Napisać metodę do usuwania w tym komponencie
    // 3) Usunęli tego usuniętego studenta z kolekcji
    // 4) Komunikacja użytkownikowi o usunięciu rekordu
    title : string = "Lista studentów";
    new_title = "Nowa lista studentów";
    isTextDisplayed : boolean = false;
    collapseText = "Pokaż";
    students : Student[] = [];
    isLoadingComplete = false;
    isDeletedSuccessful = false;

    constructor(private studentService : StudentService){
      this.getData();
    }

    getData(){
      console.log("Przed wywolaniem studentService");
      this.studentService
      .getStudents()
      .pipe(delay(2000))
      .subscribe(data=>{
        this.students = data;
        console.log("Wewnatrz subscribe ");
        this.isLoadingComplete = true;
      });
      console.log("Po wywolaniu studentService");

      return true;
    }
    
    delete(studentId : number){
      this.isDeletedSuccessful = false;

      console.log("Przycisk usuwania kliknięto dla studenta o id: " + studentId);
      this.studentService.deleteStudent(studentId)
        .subscribe(data=>{
          console.log("Usunięto studenta o id: " + studentId);
          //Usunąć ten rekord z tablicy studentów
          this.students = this.students.filter(s=>s.id !== studentId);
          this.isDeletedSuccessful = true;
        });
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

    getReturnStudentWithId(student : Student){
      if (student.id == 1 || student.name == 'Kurtis Weissnat'){
        return true;
      }
      return false;
    }
}
