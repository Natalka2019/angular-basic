import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Task2Service } from '../../task2.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit, OnDestroy {
  minLength = 2;
  maxLength = 60;
  validation = [Validators.minLength(this.minLength), Validators.required];
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  showStatusContent: boolean = false;

  public newUserForm: FormGroup;

  addUserSub: Subscription = new Subscription();
  dataSub: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private usersService: Task2Service, private dataService: DataService) {
    this.newUserForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstName: ['AB', this.validation],
      lastName: ['CD', [...this.validation, Validators.maxLength(60)]],
      email: ['a@b', [Validators.required, Validators.email]],
      phone: ['1', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  onAddUser() {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    return this.usersService.addUser(this.newUserForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'User was successfully created.';
        this.showStatusContent = true;

        const updatedUser = {
          ...this.newUserForm.value,
          isSelected: false,
          avatar:
            'https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/old_glasses_people_woman_grandmother_avatar_elderly-256.png',
          name: `${this.newUserForm.value.firstName} ${this.newUserForm.value.lastName}`,
        };

        this.dataService.addUserToList(updatedUser);
      },
      error: (error) => {
        console.log(error);

        this.isLoading = false;
        this.errorMessage = 'Oooops, something went wrong. Please try again later.';
        this.showStatusContent = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.addUserSub.unsubscribe();
    this.dataSub.unsubscribe();
  }
}
