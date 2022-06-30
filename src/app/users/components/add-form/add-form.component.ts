import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  public newUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.newUserForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  }

  onCancel() {
    console.log('Cancel');
    this.router.navigate(['/task2']);
  }

  onAddUser() {
    console.log(this.newUserForm.value);
  }
}
