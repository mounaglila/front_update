import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  studentId: string = '';
  studentData: any = {};

  constructor(private route: ActivatedRoute, private service: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id') || '';
    if (this.studentId) {
      this.service.getTableData('students').subscribe(data => {
        this.studentData = data.find((student: any) => student._id === this.studentId);
      });
    }
  }

  updateStudent(): void {
    this.service.updateTableData('students', this.studentData).subscribe({
      next: (response) => {
        alert('Student updated successfully!');
        this.router.navigate(['/students']); // Redirection après mise à jour
      },
      error: (error) => {
        console.error('Error updating student:', error);
        alert('An error occurred while updating.');
      }
    });
  }
}
