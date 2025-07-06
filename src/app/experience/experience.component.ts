import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: any[] = [
    {
      company: 'Deloitte Pune (ARTech Infosystem Pvt Ltd)',
      location: 'Pune',
      role: 'Sr. Software Developer',
      duration: 'Feb 2025 - Present',
      responsibilities: [
        'Developed responsive and interactive data tables using Angular 17 and PrimeNG, adhering to Dell’s system design guidelines.',
        'Implemented micro-frontend architecture to enable modular development and seamless integration with other enterprise applications.',
        'Collaborated with backend and data engineering teams to define data contracts and optimize data flow.',
        'Ensured accessibility and usability by following best practices in UI/UX and Dell’s design standards.',
        'Participated in code reviews, unit testing, and performance optimization to deliver a robust and maintainable application.'
      ]
    },
    {
      company: 'Aioneers Technologies',
      location: 'Pune',
      role: 'Software Developer',
      duration: 'Jan 2023 - Dec 2024',
      responsibilities: [
        'Developed and maintained high-performance SPAs using Angular 13–17.',
        'Collaborated with UX/UI teams to deliver clean, intuitive interfaces.',
        'Integrated RESTful APIs using Angular’s HTTP client.',
        'Used Angular CLI and NgRx for modular architecture.',
        'Led migration to Micro-Frontend architecture.'
      ]
    },
    {
      company: 'Infosys Limited',
      location: 'Pune',
      role: 'Technology Analyst',
      duration: 'Jan 2020 – Oct 2022',
      responsibilities: [
        'Built web apps using HTML5, CSS3, JavaScript, and Angular.',
        'Handled interactions and validation using JavaScript/jQuery.',
        'Integrated visuals from design team into the front end.',
        'Worked within Agile/Scrum methodologies.',
        'Converted PSDs to responsive HTML.',
        'Led front-end planning and mentored juniors.'
      ]
    },
    {
      company: 'Rajyug IT Solutions',
      location: 'Pune',
      role: 'Web Developer',
      duration: 'Jul 2019 - Nov 2019',
      responsibilities: [
        'Converted PSD designs to HTML pages.',
        'Checked copywriting, images, and banners for integration.',
        'Participated in peer reviews.',
        'Managed end-to-end project planning to delivery.'
      ]
    }
  ];
}
