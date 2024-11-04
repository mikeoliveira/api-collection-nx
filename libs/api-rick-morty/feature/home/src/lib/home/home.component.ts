import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListCharactersComponent } from '@api-rick-morty/list-characters';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ListCharactersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
