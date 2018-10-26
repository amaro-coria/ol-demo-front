import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ItemModel} from '../shared/item.model';
import {ItemServiceService} from '../shared/item-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css'],
  providers: [ItemServiceService]
})
export class ItemNewComponent implements OnInit {

  constructor(private itemService: ItemServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const _name = f.value.name;
    const _amount = f.value.amount;
    const _inventory = f.value.inventory;
    const item: ItemModel = {
      amount: _amount,
      name: _name,
      inventoryCode: _inventory,
      itemNo: 0
    };
    this.itemService.addItem(item).subscribe(
      data => {this.router.navigate(['items']); },
        error => { alert('Problem editing data!'); }
      );
  }

}
