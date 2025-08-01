import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Banana', price: 5 },
    { id: 3, name: 'Cherry', price: 15 }
  ];
}
