import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task2Service } from '../../task2.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit, OnDestroy {
  minLength = 2;
  maxLength = 60;
  validation = [Validators.minLength(this.minLength), Validators.required];

  public newUserForm: FormGroup;

  addUserSub: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private router: Router, private usersService: Task2Service) {
    this.newUserForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstName: ['', this.validation],
      lastName: ['', [...this.validation, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onCancel() {
    this.router.navigate(['/task2']);
  }

  onAddUser() {
    console.log(this.newUserForm.value);

    this.addUserSub = this.usersService.addUser(this.newUserForm.value).subscribe();
  }

  ngOnDestroy(): void {
    this.addUserSub.unsubscribe();
  }
}
