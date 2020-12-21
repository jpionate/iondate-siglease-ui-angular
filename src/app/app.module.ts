import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  
import { MatDialogModule } from '@angular/material/dialog';
import { BlockComponent } from './block/block.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ItemButtonComponent } from './item-button/item-button.component';
import { SystemService } from './system.service';
import { AnfbaterComponent } from './anfbater/anfbater.component';


@NgModule({
  declarations: [
    AppComponent,
    AnfbaterComponent,
    BlockComponent,
    ItemInputComponent,
    ItemButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialMultilevelMenuModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    
  ],
  entryComponents: [],
  providers: [SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
