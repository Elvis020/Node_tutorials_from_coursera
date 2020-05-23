import { Dish } from './../shared/dish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [
    {
      id: '1',
      name: 'Rice and Stew',
      image: '/assets/zucchipakoda.png',
      catergory: 'appetizer',
      featured: false,
      label: '',
      price: '20',
      description: 'Perfumed rice with delicious chicken stew!'
    },
    {
      id: '2',
      name: 'Banku and Okro',
      image: '/assets/vadonut.png',
      catergory: 'fire-for-fire',
      featured: true,
      label: '',
      price: '15',
      description: 'Banku balls and nice okro stew with fried fish'
    },
    {
      id: '3',
      name: 'Fufu and Light Soup',
      image: '/assets/elaicheesecake.png',
      catergory: 'dessert',
      featured: false,
      label: '',
      price: '35',
      description: 'Special pounded fufu with light soup for your taste'
    },
    {
      id: '4',
      name: 'Rice Balls and Palm-Nut Soup',
      image: '/assets/uthappizza.png',
      catergory: 'heavy',
      featured: true,
      label: '',
      price: '25',
      description: 'Omo tuo special for all Rice balls lovers enjoy!!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
