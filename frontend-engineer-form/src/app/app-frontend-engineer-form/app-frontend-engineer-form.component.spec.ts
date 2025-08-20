import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFrontendEngineerFormComponent } from './app-frontend-engineer-form.component';

describe('AppFrontendEngineerFormComponent', () => {
  let component: AppFrontendEngineerFormComponent;
  let fixture: ComponentFixture<AppFrontendEngineerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFrontendEngineerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFrontendEngineerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
