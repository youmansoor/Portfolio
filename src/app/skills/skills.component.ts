import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [RouterModule,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:any;
  constructor(private productservice:ProductService){}

  ngOnInit(){
    this.productservice.gettechnologies().subscribe((data:any)=>{
    this.skills=data;
  });
}
}
