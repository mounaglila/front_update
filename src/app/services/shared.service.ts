import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
   providedIn: 'root'
}
)
export class SharedService {
  updateTableData(table: string, id: string, data: any): Observable<any> {
    console.log(`Sending update request to table: ${table}, id: ${id}, with data:`, data);
    return this.http.put<any>(`${this.apiUrl}/update/${table}/${id}`, data);
  }

  getTableData(table: string): Observable<any[]> { // ✅ Doit retourner un Observable
    return this.http.get<any[]>(`${this.apiUrl}/getall/${table}`);
  }

   private apiUrl = 'http://localhost:3000/api';
   constructor(private http: HttpClient) { }
   getUsers() {
      return this.http.get(`${this.apiUrl}/getall`);
   }
}
