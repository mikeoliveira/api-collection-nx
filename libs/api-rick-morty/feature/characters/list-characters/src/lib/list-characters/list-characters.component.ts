import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-list-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css',
})
export class ListCharactersComponent {}
