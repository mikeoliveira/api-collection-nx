import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-favorite-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-characters.component.html',
  styleUrl: './favorite-characters.component.css',
})
export class FavoriteCharactersComponent {}
