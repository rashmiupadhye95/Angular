import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../student';
import  DataService   from '../service/data.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  	
  }
    student = {id:0, firstName:'', lastName:'', email:'', phone:''}
    students = this.dataService.getStudents();
    


  addUpdateStudent(student){
  	this.dataService.addUpdateStudent(student);
  	this.students = this.dataService.getStudents();
  }

  deleteStudent(student){
  	this.dataService.deleteStudent(student);
  	this.students = this.dataService.getStudents();

  }

  deleteAllStudents(){
  	this.dataService.deleteAllStudents();
  	this.students = this.dataService.getStudents();

  }
  logout(){
  	this.router.navigate(['/login']);
  }

  selectStudent(student){
  	this.student = student;
  }
}
