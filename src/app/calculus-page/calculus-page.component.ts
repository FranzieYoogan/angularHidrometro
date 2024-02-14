import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-calculus-page',
  standalone: true,
  imports: [CalculusPageComponent,HeaderComponent],
  templateUrl: './calculus-page.component.html',
  styleUrl: './calculus-page.component.css'
})
export class CalculusPageComponent {

}
