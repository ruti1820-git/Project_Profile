import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Oz Ceramics',
      subtitle: 'E-Commerce Store',
      description: 'A dynamic, feature-rich online ceramics shopping platform...',
      tech: ['React 19', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'],
      image: 'assets/oz-ceramics.png',
      githubLink: 'https://github.com/ruti1820-git/Project-Angular-NetCore'
    },
    {
      title: 'Luxury Auction',
      subtitle: 'Chinese Auction',
      description: 'Enterprise-grade full-stack management system...',
      tech: ['Angular 19', 'PrimeNG', 'NgRx', 'TypeScript', '.NET 8'],
      image: 'assets/luxury-auction.png',
      githubLink: 'https://github.com/ruti1820-git/Project-React-Node'
    }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}