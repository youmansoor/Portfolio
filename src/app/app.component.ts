import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductService } from './service/product.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  projects:any;
    constructor(private productservice:ProductService){}
  
    OnInit(){
      this.productservice.getproducts().subscribe((data:any)=>{
        this.projects=data;
      })
    }
  mouseX = 0;
  mouseY = 0;
  circleX = 0;
  circleY = 0;

  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    const dot = document.querySelector('.cursor-dot') as HTMLElement;
    if (dot) {
      dot.style.top = `${this.mouseY}px`;
      dot.style.left = `${this.mouseX}px`;
    }
  }

  ngAfterViewInit() {
    // Animate circle separately for smooth trailing
    const circle = document.querySelector('.cursor-circle') as HTMLElement;

    const animateCircle = () => {
      if (circle) {
        // Ease factor: smaller = slower trailing
        const ease = 0.15;
        this.circleX += (this.mouseX - this.circleX) * ease;
        this.circleY += (this.mouseY - this.circleY) * ease;

        circle.style.top = `${this.circleY}px`;
        circle.style.left = `${this.circleX}px`;
      }

      requestAnimationFrame(animateCircle);
    };

    animateCircle();

    // ---------- Star animation ----------
    const canvas = document.getElementById('star-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    let stars: any[] = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create stars
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random()
      });
    }

    // Animate stars
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity < 0) star.opacity = 0;
        if (star.opacity > 1) star.opacity = 1;
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();
  }
}