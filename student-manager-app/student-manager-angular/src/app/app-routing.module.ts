import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { HtmlCssSandboxComponent } from './html-css-sandbox/html-css-sandbox.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path: "add-student", component: AddStudentComponent},
  { path: "students", component: ListStudentsComponent},
  { path: "sandbox", component: HtmlCssSandboxComponent},
  { path: "edit-student/:id", component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
