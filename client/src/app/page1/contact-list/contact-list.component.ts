import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'] 
})
export class ContactListComponent {
  @Input() contacts;
 
  constructor() { }
}
