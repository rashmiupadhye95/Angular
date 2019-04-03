import { Injectable } from '@angular/core';
import Student from '../student';

@Injectable({
  providedIn: 'root'
})
export default class DataService {
	constructor() {  }
    students = [
    {id:1, firstName:'Rashmi', lastName:'Upadhye', email:'rashmi@gmail.com', phone:'12345'},
    {id:2, firstName:'Ramya', lastName:'Patil', email:'ramya@gmail.com', phone:'67891'}
    ];


getStudents(){
	return this.students;
}

addUpdateStudent(student){
	var updated = false;
  	for(var i = 0; i<this.students.length;i++){
  		if(student.id == this.students[i].id){
  			updated = true;
  			this.students[i] = student;
  			break;
  		}
  	}
  	if(!updated){
      student.id = Math.round(Math.random()*100000);
  		this.students.push(student);
      
	}
}

	getStudentById(id){
		for(var i = 0;i<this.students.length;i++){
			if(id == this.students[i].id){
				return this.students[i];
			}
		}
		return null;
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
}
