import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../../category.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private SERVER_URL = "http://localhost:8080/api/customer/";

  constructor(private http: HttpClient) { }

  // Ajoutez la méthode pour récupérer les catégories postées par l'admin
  getPostedCategories(): Observable<Category[]> {
    const url = `${this.SERVER_URL}posted`;
    return this.http.get<Category[]>(url);
  }}