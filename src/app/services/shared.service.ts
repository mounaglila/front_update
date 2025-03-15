import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
   providedIn: 'root'
}
)
export class SharedService {
  updateTableData(table: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${table}`, data);
  }

  getTableData(table: string): Observable<any[]> { // ✅ Doit retourner un Observable
    return this.http.get<any[]>(`${this.apiUrl}/${table}`);
  }

   private apiUrl = 'http://localhost:3000/api/getall';
   constructor(private http: HttpClient) { }
   getUsers() {
      return this.http.get(this.apiUrl);
   }
}
