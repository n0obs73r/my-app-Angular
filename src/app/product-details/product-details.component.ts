import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Product, products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }


  ngOnInit(): void {

    //getting the pid from current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find product corresponding with id provided in route
    this.product = products.find(product => product.id === productIdFromRoute);

  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert("Your product has been added to cart!")
  }

}
