import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {AppFrontendEngineerFormBase} from './helpers/app-frontend-engineer-form.base';

@Component({
  selector: 'app-frontend-engineer-form',
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './app-frontend-engineer-form.component.html',
  styleUrl: './app-frontend-engineer-form.component.css'
})
export class AppFrontendEngineerFormComponent extends AppFrontendEngineerFormBase {


}
