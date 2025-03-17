import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  tables: string[] = [];
  dataMap: any = {};

  constructor(private service: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      console.log("Données reçues:", data);
      if (data && typeof data === "object") {
        this.tables = Object.keys(data);
        this.dataMap = data;
      } else {
        this.tables = [];
        this.dataMap = {};
      }
    });
  }

  // Get columns dynamically
  getColumns(table: string): string[] {
    return this.dataMap[table] && this.dataMap[table].length > 0
      ? Object.keys(this.dataMap[table][0]) : [];
  }

  // Get values dynamically
  getValues(row: any): any[] {
    return Object.values(row);
  }

  // View function (optional, for debugging)
  viewStudent(student: any): void {
    console.log('View student:', student);
    alert(`Viewing student: ${JSON.stringify(student, null, 2)}`);
  }

  // Update function (redirects to generic update page)
  updateStudent(student: any): void {
    this.router.navigate(['/update', 'students', student._id]);
  }

  // Delete function (removes student locally)
  deleteStudent(studentId: string): void {
    console.log('Delete student ID:', studentId);
    this.dataMap['students'] = this.dataMap['students'].filter((student: any) => student._id !== studentId);
    alert('Student Deleted!');
  }
}
