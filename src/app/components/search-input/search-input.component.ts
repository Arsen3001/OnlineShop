import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  keyWord = '';
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  searchWord(): void {
  if (this.keyWord) {
    this.router.navigate(['search', this.keyWord]);
  }  else {
    this.router.navigate(['']);
  }
  }
}
