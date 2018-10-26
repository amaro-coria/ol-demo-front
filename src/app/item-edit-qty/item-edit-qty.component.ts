import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemServiceService} from '../shared/item-service.service';
import {ItemModel} from '../shared/item.model';
import {NgForm} from '@angular/forms';
import {ItemOperationModel} from '../shared/item-operation.model';

@Component({
  selector: 'app-item-edit-qty',
  templateUrl: './item-edit-qty.component.html',
  styleUrls: ['./item-edit-qty.component.css']
})
export class ItemEditQtyComponent implements OnInit {
  item: ItemModel;
  constructor(private route: ActivatedRoute, private itemService: ItemServiceService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.itemService.fetchSingleItem(id).subscribe(
      data => {this.item = data; },
      error1 => {alert('Problem fetching data!'); }
    );
  }

  onSubmit(f: NgForm) {
    const _qty = f.value.qty;
    const itemOperation: ItemOperationModel = {
      amount: _qty,
      itemNo: this.item.itemNo
    };
    this.itemService.addOrRemoveQty(itemOperation).subscribe(
      data => {
        this.router.navigate(['items']);
      },
      error1 => {alert('Invalid quantity!'); }
    );
  }

}
