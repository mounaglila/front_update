import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
}
)
export class teachersComponent implements OnInit {
  tables: string[] = [];
  dataMap: any = {};

  constructor(private service: SharedService, private router: Router) {}
  ngOnInit(): void {
      this.service.getUsers().subscribe(data => {
      console.log("Données reçues:", data );
      if (data && typeof data === "object") {
        this.tables = Object.keys(data);
        this.dataMap = data;
        } else {
          this.tables = [];
          this.dataMap = {};
        }
      }
      );
    }
//get columns for the table dynamically
    getColumns(table: string): string[] {
        return this.dataMap[table] && this.dataMap[table].length > 0
          ? Object.keys(this.dataMap[table][0]) : [];
    }
 // Get the values of a row dynamically
    getValues(row: any): any[] {
      return Object.values(row);
  }
// New Methods for the Buttons
    viewteachers(teachers: any): void {
    console.log('View teachers:', teachers);
    alert(`Viewing teachers: ${JSON.stringify(teachers, null, 2)}`);
}
    updateTeacher(teacher: any): void {
      this.router.navigate(['/update', 'teachers', teacher._id]);
}
    deleteteachers(teachersId: string): void {
    console.log('Delete teachers ID:', teachersId);
    this.dataMap['teachers'] = this.dataMap['teachers'].filter((teachers: any) => teachers.id !== teachersId);
    alert('teachers Deleted!');
  }
}
