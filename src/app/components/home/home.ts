import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // למקרה שנרצה אייקונים
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  name = 'Talya Toledano';
  title = 'Software Engineer | Full Stack Developer';
  description = `Results-driven Full Stack Developer with strong analytical thinking and a proven ability to rapidly acquire new technologies. Experienced in building end-to-end web systems while leveraging AI tools to streamline workflows and enhance performance. A collaborative team player who thrives in dynamic, high-pressure environments, delivering clean, maintainable code that meets the highest professional standards.`;
  
  codeSnippet = `const developer = {
  name: "Talya Toledano",
  role: "Full Stack Developer",
  expertise: [
    "React", 
    "Angular", 
    ".NET", 
    "Node.js", 
    "Spring Boot"
  ],
  passion: "Crafting elegant solutions to complex problems ✨"
};`;
}