import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'dipeekakrathod@gmail.com';
  phone: string = '8275325479';
  linkedin: string = 'https://linkedin.com/in/dipeeka-rathod';
}
