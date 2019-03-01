import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../../services/items.service';
import { Item } from './../../interfaces/Item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];

  constructor(
    public itemService: ItemsService
  ) {}

  ngOnInit() {
    this.itemService.itemObservableSubject.subscribe((data: []) => {
      this.items = data;
      console.log('components', data);
    }, (err) => console.log(err));
  }
}
