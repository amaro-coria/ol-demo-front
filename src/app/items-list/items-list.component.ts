import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ItemModel} from '../shared/item.model';
import {ItemServiceService} from '../shared/item-service.service';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemServiceService]
})
export class ItemsListComponent implements OnInit {
  itemsList: Array<ItemModel>;
  displayedColumns = ['itemNo', 'name', 'amount', 'inventoryCode', 'actions'];
  dataSource: MatTableDataSource<ItemModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private itemService: ItemServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.itemService.fetchItems().subscribe(
      data => {this.itemsList = data;
      this.dataSource = new MatTableDataSource(this.itemsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }


}
