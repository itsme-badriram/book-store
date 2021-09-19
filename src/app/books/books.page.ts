import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
books: any = [];

  constructor(private router: Router, private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.allBooks;
  }
  onBookDetails(bookId) {
    this.router.navigate(['/', 'books', bookId]);
  }

}
