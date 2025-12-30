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
export class HomeComponent implements AfterViewInit {

  roles: string[] = ['Front-End Developer', 'Full-Stack Developer'];
  roleIndex: number = 0;
  charIndex: number = 0;
  typingSpeed: number = 150;
  deletingSpeed: number = 50;
  delayBetweenRoles: number = 1500;

  ngAfterViewInit(): void {
    this.typeRole();
  }

  typeRole() {
    const roleSpan = document.getElementById('role')!;
    const currentRole = this.roles[this.roleIndex];

    if (this.charIndex < currentRole.length) {
      roleSpan.textContent += currentRole[this.charIndex];
      this.charIndex++;
      setTimeout(() => this.typeRole(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteRole(), this.delayBetweenRoles);
    }
  }

  deleteRole() {
    const roleSpan = document.getElementById('role')!;
    if (this.charIndex > 0) {
      roleSpan.textContent = roleSpan.textContent!.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.deleteRole(), this.deletingSpeed);
    } else {
      // Move to next role
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      setTimeout(() => this.typeRole(), this.typingSpeed);
    }
  }
}