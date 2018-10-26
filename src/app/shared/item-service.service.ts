import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemModel} from './item.model';
import {ItemOperationModel} from './item-operation.model';
import {ItemPartialUpdateModel} from './item-partial-update.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  urlRoot = 'http://localhost:9090/api/v1/item';
  constructor(private httpClient: HttpClient) { }

  fetchItems() {
    return this.httpClient.get<Array<ItemModel>>(this.urlRoot);
  }

  fetchSingleItem(id: number) {
    return this.httpClient.get<ItemModel>(this.urlRoot + '/' + id);
  }

  addItem(item: ItemModel) {
    return this.httpClient.post<ItemModel>(this.urlRoot, item);
  }

  deleteItem(id: number) {
    return this.httpClient.delete(this.urlRoot + '/' + id);
  }

  addOrRemoveQty(itemOperation: ItemOperationModel) {
    return this.httpClient.post<ItemModel>(this.urlRoot + '/operation', itemOperation);
  }

  partialUpdate(item: ItemPartialUpdateModel) {
    return this.httpClient.patch<ItemModel>(this.urlRoot, item);
  }
}
