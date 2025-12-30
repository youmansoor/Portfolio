import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-about',
  imports: [RouterModule,
    RouterOutlet,
    ProjectsComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  journey:any;
  constructor(private productservice:ProductService){}

  ngOnInit(){
    this.productservice.getjourney().subscribe((data:any)=>{
      this.journey=data;
    })
  }

}
