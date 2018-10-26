import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ItemsListComponent } from './items-list/items-list.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemNewComponent } from './item-new/item-new.component';
import { ItemEditQtyComponent } from './item-edit-qty/item-edit-qty.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsListComponent,
    HomeComponent,
    ItemEditComponent,
    ItemNewComponent,
    ItemEditQtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
