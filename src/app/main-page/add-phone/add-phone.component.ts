import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/_shared/services/user.service';
import { IUser } from 'src/app/admin/details/_models/user-model';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddPhoneComponent>,
              private userService: UserService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      phone: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }

  close() {
    this.dialogRef.close();
  }

  add() {
    let value = this.formGroup.value;
    this.userService.create<IUser>(value).subscribe(result => {
      this.dialogRef.close(result);
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  isValid() {
    return this.formGroup.valid;
  }

}
