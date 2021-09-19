import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private books = [
        {
          id: 'b1',
          title: 'Java The Complete Reference',
          author: ['Herbert Schildt'],
          publication: 'McGraw-Hill',
          edition: '7',
          cover: 'java.jpg'
        },
        {
          id: 'b2',
          title: 'Software Engineering - A Practitioner\'s Approach',
          author: ['Roger S. Pressman'],
          publication: 'McGraw-Hill',
          edition: '7',
          cover: 'software-engg.jpg'
        },
        {
          id: 'b3',
          title: 'Computer Networking - A Top-Down Apporach',
          author: ['James F. Kurose', 'Keith W. Ross'],
          publication: 'Pearson',
          edition: '6',
          cover: 'networks.jpg'
        }
        ];

    get allBooks() {
        return [...this.books];
    }
    getBook(id: string) {
        return {...this.books.find(b => b.id === id)};
    }
}
