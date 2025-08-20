import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppFrontendEngineerFormComponent} from './app-frontend-engineer-form/app-frontend-engineer-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppFrontendEngineerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-engineer-form';
}
