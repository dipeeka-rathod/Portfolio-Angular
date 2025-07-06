import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      category: 'Languages',
      items: ['HTML', 'HTML5', 'CSS', 'CSS3', 'SASS', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      category: 'Tools',
      items: ['VS Code', 'Git', 'Postman', 'JIRA', 'Version One', 'Photoshop']
    },
    {
      category: 'Frameworks',
      items: ['Bootstrap', 'Angular v2+', 'Angular 6', 'Angular 13', 'Angular 15', 'Angular 16', 'Angular 17']
    },
    {
      category: 'Library & Architecture',
      items: ['jQuery', 'Angular Material', 'NgRx', 'Microfrontend (using Nx)']
    },
    {
      category: 'Testing',
      items: ['Jasmine', 'Karma', 'Unit Testing']
    }
  ];
}
