import { Injectable } from '@angular/core';
import { Item } from './../interfaces/item';
import {BehaviorSubject } from 'rxjs';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: Item[] = [
   {
     brand: 'Apple',
     model: 'iPhone 7',
     price: 500,
     id: 1
   }
  ];
  private _itemSourse = new BehaviorSubject(this.items);
  public itemObservableSubject = this._itemSourse.asObservable();
  constructor() { }

public getItems(): Item[] {
  return this.items.slice();
}
public addItem(item: Item): void {
  this._itemSourse.error('Some error');
item.id = this.items.length + 1;
this.items.push(Object.assign({}, item));
this._itemSourse.next(this.items);
console.log(this.items);
}
}
