import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {


    private apiUrl = 'http://localhost:8080/api/auth/scrape'; // L'URL de votre API backend
  
    constructor(private http: HttpClient) { }
  
    getJobs(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  }
  
