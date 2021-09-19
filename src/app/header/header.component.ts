import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSearchbarOpened = false;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.isSearchbarOpened);
  }
  searchByKeyword(event) {
    console.log('Yess');
    event.target.blur();
  }
  onHome() {
    this.router.navigateByUrl('/home');
  }
  checkBlur() {

  }

}
