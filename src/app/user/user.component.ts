import { Component,OnInit } from '@angular/core';
import { UsersService } from '../service/service/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  users: { name: string, mobile: string, email: string }[] = [
    { name: 'Sow', mobile: '97865534567', email: 'sow@gmail.com' },
    { name: 'Gaj', mobile: '97865534567', email: 'sow@gmail.com' },
    { name: 'Haa', mobile: '97865534567', email: 'sow@gmail.com' },
    { name: 'Bha', mobile: '97865534567', email: 'sow@gmail.com' }
  ];

  addUser() {
    // Functionality to add a new user
    console.log('Add user clicked');
  }

  editUser(user: { name: string, mobile: string, email: string }) {
    // Functionality to edit a user
    console.log('Edit user clicked:', user);
  }

  deleteUser(user: { name: string, mobile: string, email: string }) {
    // Functionality to delete a user
    console.log('Delete user clicked:', user);
  }


}
