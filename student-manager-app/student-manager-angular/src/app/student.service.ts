import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) {}

  // Metoda odpowiedzialna jest za pobranie studentów z zewnętrznego API
  getStudents() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.studentApiUrl);
  }

   // Metoda odpowiedzialna jest za pobranie studentów z zewnętrznego API
   getStudentById(id : number) : Observable<Student>{
    let addressToDeleteStudent = this.studentApiUrl + "/" + id; 
    return this.httpClient.get<Student>(addressToDeleteStudent);
  }

  //Metoda odpowiedzialna za usuwanie studenta o określonym id
  deleteStudent(studentId : number){
    let addressToDeleteStudent = this.studentApiUrl + "/" + studentId; 
    return this.httpClient.delete<Student>(addressToDeleteStudent);
  }

  //Metoda odpowiedzialna za wysyłanie (dodanie) studenta na serwer
  postStudent(student : Student){
    return this.httpClient.post<Student>(this.studentApiUrl, student);
  }

  //Metoda aktualizująca studenta na serwerze
  putStudent(student: Student){
    let addressStudent = this.studentApiUrl + "/" + student.id; 
    return this.httpClient.put<Student>(addressStudent, student);
  }
}
