import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
book: any;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private booksService: BooksService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId')) {
        this.navCtrl.navigateBack('/books');
        return;
      }
      this.book = this.booksService.getBook(paramMap.get('bookId'));
    });
  }

}
