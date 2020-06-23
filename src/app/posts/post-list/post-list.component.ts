import { Component, OnInit } from '@angular/core'
import { Post } from '../post.model';
import { PostService } from  '../posts.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class postListComponent implements OnInit{

  posts: Post[] = [];

  constructor(public postsService: PostService){

  }

  ngOnInit(){
    this.posts = this.postsService.getPosts();
  }

}
