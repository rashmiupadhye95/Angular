import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Student from '../student';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	student:Student;
	students;

  constructor(private router: Router) { }

  ngOnInit() {
  	this.resetStudent();
  	this.students = [
  	{id:1, firstName:'Rashmi', lastName:'Upadhye', email:'rashmi@gmail.com', phone:'12345'},
  	{id:2, firstName:'Ramya', lastName:'Patil', email:'ramya@gmail.com', phone:'67891'}
  	];
  }
  resetStudent(){
  	this.student = {
  		id:0,
  		firstName:'',
  		lastName:'',
  		email:'',
  		phone:'',
  	}
  }

  addUpdateStudent(){
  	var updated = false;
  	if(this.student.id == 0){
  		this.student.id = Math.round(Math.random()*100000);
  	}
  	for(var i = 0; i<this.students.length;i++){
  		if(this.student.id==this.students[i].id){
  			updated = true;
  			this.students[i] = this.student;
  			break;
  		}
  	}
  	if(!updated){
  		this.students.push(this.student);
	}
  	this.resetStudent();
  }

  deleteStudent(s){
  	for(var i = 0;i<this.students.length;i++){
  		if(s.id == this.students[i].id){
  			this.students.splice(i,1);
  		}
  	}

  }

  deleteAllStudents(){
  	this.students = [];
  }
  logout(){
  	this.router.navigate(['/login']);
  }

  selectStudent(student){

  	this.student = student;
  }
}
