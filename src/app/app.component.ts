import { Component } from '@angular/core';

@Component({
  selector: 'gq-root',
  template:`
  <div><h1>{{pageTitle}}</h1>
    <div>Search the Stars!</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Galaxy Quest'
}
