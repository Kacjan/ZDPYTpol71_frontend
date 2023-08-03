import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  // Cel : Stworzenie działającego formularze dodawania studenta i wysyłka na serwer!
  // 1) Draft formularza w html
  // 2) Dodamy style Bootstrap!
  // 3) Podepniemy kontrolki/metody do ts.
  // 4) Prostą walidacja formularze - czy pola zostały wypełnione, jeżeli nie to komunikat!
  // 5) StudentService i żądanie POST -> obsługa!
  isValidationError = false;
  isSuccess = false;

  constructor(private studentService : StudentService){}

  save(name : string, email: string){
    // console.log("Przekazany parametr name:" + name);
    // console.log("Przekazany parametr email:"+ email);
    this.isValidationError = false;

    if (!name || !email)
    {
      //alert("Jedno z pól nie jest wypełnione!");
      this.isValidationError = true;
      return false;
    }

    this.studentService.postStudent({name,email} as Student)
      .subscribe(data=>{
        console.log("Dodano studenta!");
        this.isSuccess = true;
      });

    //

    return false;
  }
}
