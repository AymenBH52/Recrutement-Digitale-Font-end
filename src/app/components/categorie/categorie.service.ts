import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  addCategorie(categorie: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addCategorie`, categorie);
  }
  getCategories(){
    return this.http.get(this.baseUrl);
  }
}
