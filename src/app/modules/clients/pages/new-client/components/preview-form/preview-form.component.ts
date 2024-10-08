import { Component, OnInit } from '@angular/core';
import { NewClientService } from '../../services/new-client.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.scss'],
})
export class PreviewFormComponent implements OnInit {
  formPreview: any;
  allUsers: any;
  constructor(
    private newClientService: NewClientService,
    private users: UsersService
  ) {}

  ngOnInit(): void {
    this.newClientService.mainForm.subscribe((data) => {
      this.formPreview = JSON.stringify(data);
    });
  }

  getUsers() {
    this.users.handleFetchUsers().then((res) => {
      this.allUsers = JSON.stringify(res);
    });
  }
}
