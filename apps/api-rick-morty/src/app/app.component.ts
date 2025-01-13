import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutCustomLabelModule } from '@api-collection-nx/ui/layout-custom-label';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutCustomLabelModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'api-rick-morty';
}
