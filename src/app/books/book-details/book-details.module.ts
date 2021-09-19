import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPageRoutingModule } from './book-details-routing.module';

import { BookDetailsPage } from './book-details.page';
import { HeaderComponent } from 'src/app/header/header.component';
import { HeaderModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookDetailsPageRoutingModule,
    HeaderModule
  ],
  declarations: [BookDetailsPage]
})
export class BookDetailsPageModule {}
