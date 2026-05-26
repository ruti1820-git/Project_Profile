import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
template: `
    <section class="about-container">
      <h1>About Me</h1>
      <p class="subtitle">My professional background, skills, and education</p>

      <div class="section-title"><span class="icon">💼</span> Professional Experience</div>
      <div class="experience-card" *ngFor="let job of jobs">
        <div class="card-header"><h3>{{ job.company }}</h3><span class="date">{{ job.date }}</span></div>
        <h4>{{ job.role }}</h4>
        <p class="project-name">{{ job.project }}</p>
        <ul><li *ngFor="let item of job.details">{{ item }}</li></ul>
      </div>

      <div class="section-title" style="margin-top: 40px;"><span class="icon">💻</span> Technical Skills</div>
      <div class="skills-grid">
        <div class="skill-card" *ngFor="let category of skills">
          <h3>{{ category.title }}</h3>
          <div class="tags"><span class="tag" *ngFor="let item of category.list">{{ item }}</span></div>
        </div>
      </div>

      <div class="section-title" style="margin-top: 40px;"><span class="icon">🎓</span> Education</div>
      <div class="education-container">
        <div class="edu-card" *ngFor="let edu of education">
          <div class="edu-header">
            <h3>{{ edu.period }}</h3>
            <h4>{{ edu.degree }} | {{ edu.institution }}</h4>
          </div>
          <ul><li *ngFor="let detail of edu.details">{{ detail }}</li></ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.scss']
})
export class About {
  jobs = [
    {
      company: 'Ministry of Finance - Capital Market Authority',
      date: 'Feb 2026 — Jun 2026',
      role: 'Software Developer',
      project: 'Core Organizational System',
      details: [
        'Full-Stack development of end-to-end features using Angular and .NET Core.',
        'Backend engineering: Built APIs and complex business logic in C#.',
        'Database integration: Optimized Oracle queries and Stored Procedures.',
        'Collaborative development: Used Git/TFS with strict coding standards.'
      ]
    }
    
  ];
  
  
skills = [
    { title: 'Programming Languages', list: ['Java', 'C', 'C#', 'Python'] },
    { title: 'Web & Frameworks', list: ['Angular 19', 'React 19', 'Node.js', 'Spring Boot', 'TypeScript', 'JavaScript', '.NET Core', 'Web API', 'Django', 'HTML5', 'CSS3'] },
    { title: 'Databases', list: ['SQL Server', 'MongoDB', 'Redis', 'Hadoop', 'BI'] },
    { title: 'Architecture & Methodologies', list: ['OOP', 'Design Patterns', 'Microservices', 'AI Development Tools'] },
    { title: 'Tools & Environments', list: ['Git', 'VS Code', 'Visual Studio', 'Postman', 'Eclipse', 'PyCharm', 'AWS', 'Azure'] },
    { title: 'Operating Systems', list: ['Linux/Unix', 'Windows'] }
  ];
  education = [
    {
      period: '2024 — 2026',
      degree: 'Software Practical Engineering',
      institution: '"Ha-Chadash" College, Jerusalem',
      details: [
        'Studies toward a Software Engineering degree certified by MAHAT',
        'Teaching Certification — pursuing "Senior Teacher" qualification',
        'Ultra Code Program — Advanced coursework: Data Structures, Algorithms, Graph Algorithms, Operating Systems',
        'Certificate of Excellence in English — Kivun College'
      ]
    },
    {
      period: '2020 — 2024',
      degree: 'Matriculation exams with honors',
      institution: 'Seminar HaChadash High School, Jerusalem',
      details: [
        'Sald Institute accredited',
        'Mathematics — 5 units (highest level)'
      ]
    }
  ];
}