import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student!: Student;
  isSuccess = false;

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(param => {
      this.studentService.getStudentById(param["id"])
        .subscribe(student => {
          this.student = student;
        })
    })
  }

  save() {
    this.studentService.putStudent(this.student)
      .subscribe(data => {
        this.isSuccess = true;
      });
  }
}

