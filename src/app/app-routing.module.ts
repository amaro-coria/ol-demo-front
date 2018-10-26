import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import {ItemNewComponent} from './item-new/item-new.component';
import {ItemEditQtyComponent} from './item-edit-qty/item-edit-qty.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'items', component: ItemsListComponent},
  {path: 'items/:id', component: ItemEditComponent},
  {path: 'new_item', component: ItemNewComponent},
  {path: 'items/qty/:id', component: ItemEditQtyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
