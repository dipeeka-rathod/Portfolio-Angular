import { Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  isInternal?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  constructor() { }

  projects: Project[] = [
    {
      title: 'Spend and Cost Insights Platform – Dell',
      description: 'An enterprise analytics platform for spend optimization and cost analysis across Dell’s supply chain and procurement ecosystem.',
      technologies: ['Angular 17', 'PrimeNG', 'Microfrontend', 'Dell Design System'],
      isInternal: true
    },
    {
      title: 'AIO Impact – Data Foundation',
      description: 'Built core data foundation layer for AI-powered planning engine, integrating and transforming large datasets for analytics pipelines.',
      technologies: ['Angular', 'REST APIs', 'NgRx', 'SCSS'],
      isInternal: true
    },
    {
      title: 'Advance Auto Parts',
      description: 'E-commerce and automotive retail platform built to enhance customer ordering experience with real-time part availability and logistics.',
      technologies: ['Angular', 'HTML5', 'JavaScript', 'JIRA', 'REST'],
      isInternal: true
    },
    {
      title: 'Experian – Affordability Passport',
      description: 'A financial web app helping lenders assess borrower affordability via secure open banking APIs and data visualization.',
      technologies: ['Angular', 'NgRx', 'API Integrations'],
      isInternal: true
    },
    {
      title: 'SunTrust (BBNT) – IBM',
      description: 'Banking portal migration and UI modernization using responsive Angular design system.',
      technologies: ['Angular', 'SASS', 'Git', 'HTML5'],
      isInternal: true
    },
    {
      title: 'BookmyAccommodation',
      description: 'A college hostel and PG booking platform allowing students to find, compare, and book rooms online.',
      technologies: ['Angular', 'Firebase', 'Bootstrap'],
      githubLink: 'https://github.com/yourusername/bookmyaccommodation'
    },
    {
      title: 'Beijing Art Gallery',
      description: 'A static single-page gallery website showcasing traditional Chinese art pieces in an interactive format.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/beijing-art-gallery'
    },
    {
      title: 'Rajyug IT Solutions Website',
      description: 'Corporate website built for a software development agency with sections for services, projects, and contact.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/rajyug-website'
    }
  ];

}
