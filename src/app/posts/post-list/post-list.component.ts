import { Component, Input } from '@angular/core'
import { Post } from '../post.model';
import { PostService } from  '../posts.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class postListComponent {

  @Input() posts: Post[] = [];

  constructor(public postsService: PostService){

  }

}
