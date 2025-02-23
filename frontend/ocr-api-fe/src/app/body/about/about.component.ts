import { Component } from '@angular/core';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    RouterLink
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
