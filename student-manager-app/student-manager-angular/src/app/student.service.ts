import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) {}

  getStudents() : Observable<Student[]>{
    return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
