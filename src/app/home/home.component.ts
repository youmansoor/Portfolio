import { Component, AfterViewInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/cv/Yousuf Mansoor (CV).pdf';
  link.download = 'Yousuf-Mansoor-CV.pdf';
  link.click();
}
}