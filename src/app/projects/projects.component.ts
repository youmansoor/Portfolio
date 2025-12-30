import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,
    RouterModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects:any;
  constructor(private productservice:ProductService){}

  ngOnInit(){
    this.productservice.getproducts().subscribe((data:any)=>{
      this.projects=data;
    })
  }
}
