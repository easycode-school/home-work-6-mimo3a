import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { Item } from './../../interfaces/Item';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usersArray;
  constructor(
    public usersService: UsersService,
  ) { }

  ngOnInit() {
    this.usersService.getExpl().subscribe(
        (users) => {
          this.usersArray = users;
          console.log('Next', users);
          console.log('usersArray', this.usersArray);
          },
        (err) => console.log(err),
        () => console.log('Complete')
    );
  }
}
