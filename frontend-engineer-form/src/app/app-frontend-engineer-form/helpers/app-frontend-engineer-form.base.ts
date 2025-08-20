import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {delay, map, of} from 'rxjs';


export class AppFrontendEngineerFormBase {
  form: FormGroup;

  frameworks = ['angular', 'react', 'vue'];
  frameworkVersions: { [key: string]: string[] } = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      framework: ['', Validators.required],
      frameworkVersion: [{ value: '', disabled: true }, Validators.required],
      email: ['', [Validators.required, Validators.email], [this.emailExistsValidator()]],
      hobbies: this.fb.array([], Validators.minLength(1))
    });

    this.form.get('framework')?.valueChanges.subscribe(framework => {
      const versionControl = this.form.get('frameworkVersion');
      if (framework) {
        versionControl?.enable();
      } else {
        versionControl?.disable();
      }
      versionControl?.reset();
    });
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  addHobby() {
    const hobbyGroup = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required]
    });
    this.hobbies.push(hobbyGroup);
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) return of(null);
      return of(control.value).pipe(
        delay(500),
        map(value => value === 'test@test.test' ? { emailExists: true } : null)
      );
    };
  }

  submit() {
    if (this.hobbies.length === 0) {
      this.form.get('hobbies')?.setErrors({ minHobbies: true });
      this.form.get('hobbies')?.markAsTouched();
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { firstName, lastName, dateOfBirth, framework, frameworkVersion, email, hobbies } = this.form.value;

    const result = {
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirth).toLocaleDateString('en-GB'),
      framework,
      frameworkVersion,
      email,
      hobbies
    };
    console.log('Final payload:', result);
    alert(JSON.stringify(result, null, 2));
  }
}
