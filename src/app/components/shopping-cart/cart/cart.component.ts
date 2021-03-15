import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import {AddToCartService} from 'src/app/services/add-to-cart.service'

export interface Post {
  title:string;
  content:string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {



  ngOnInit(): void {
  }

  public post:Post; 

  @Output() postCreated = new EventEmitter<Post>();

  constructor() {
    this.post = {} as Post;
  }

  onAddPost(){
    const post = {
      title: this.post.title,
      content: this.post.content
    };
    this.postCreated.emit(post);
  }

}
