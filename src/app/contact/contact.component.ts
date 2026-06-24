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
  url = "https://script.google.com/macros/s/AKfycbxc8TGBVPY_zn2174v-i3UhcnS5I_P4qaKXOqEyFv4oHkcqqM5JeswpGiy4CYbTzfE/exec";
  constructor(private productService:ProductService){}
  // ngOnInit(){
  //   this.getdata();
  // }
  // getdata(){
  //   this.productService.getfeedback().subscribe((data:feedback[])=>{
  //     this.feedbacks=data;
  //   })
  // }
  adddata(data: any) {
  fetch(this.url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  alert("Submitted (check sheet)");
}
}
