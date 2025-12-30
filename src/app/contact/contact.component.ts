import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { feedback } from '../../interface/feedback';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  feedbacks:feedback[]=[];
  constructor(private productService:ProductService){}
  ngOnInit(){
    this.getdata();
  }
  getdata(){
    this.productService.getfeedback().subscribe((data:feedback[])=>{
      this.feedbacks=data;
    })
  }
  add(user:feedback){
    this.productService.postfeedback(user).subscribe((data:feedback[])=>{
      if(data){
        this.getdata();
      }
    })
  }
}
