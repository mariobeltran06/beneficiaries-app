import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar>
      <img src="assets/svg/logo-cuscatlan.svg" />
    </mat-toolbar>
  `,
  styles: [
    `
      mat-toolbar {
        background-color: white;
      }
    `,
  ],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
})
export class ToolbarComponent {}
