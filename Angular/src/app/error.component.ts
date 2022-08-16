import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: '<h1 style="text-align: center; color: red; margin-top: 20%">404 Error: Page not found</h1>'
})
export class ErrorComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
