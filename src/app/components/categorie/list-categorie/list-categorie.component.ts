import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
categories:any={};
constructor(private router: Router,private categorieService:CategorieService){}
  ngOnInit() {
   this.getAllCategories();
  }
  getAllCategories(){
    this.categorieService.getCategories().subscribe(
    (data) => {
this.categories=data;
console.log(data)
this.router.navigate(['/list-categorie'])
      }
    )
  }

}
