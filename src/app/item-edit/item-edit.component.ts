import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemModel} from '../shared/item.model';
import {ItemServiceService} from '../shared/item-service.service';
import {NgForm} from '@angular/forms';
import {ItemPartialUpdateModel} from '../shared/item-partial-update.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
  providers: [ItemServiceService]
})
export class ItemEditComponent implements OnInit {
  item: ItemModel;
  constructor(private route: ActivatedRoute, private itemService: ItemServiceService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.itemService.fetchSingleItem(id).subscribe(
      data => {this.item = data; }
    );
  }

  onSubmit(f: NgForm) {
    const newName = f.value.item_name;
    const itemPartial: ItemPartialUpdateModel = {
      itemNo: this.item.itemNo,
      name: newName
    };
    this.itemService.partialUpdate(itemPartial).subscribe(
      data => {
        this.router.navigate(['items']);
      }
    );
  }

}
