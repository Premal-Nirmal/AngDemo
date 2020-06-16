import {Component, EventEmitter, Output} from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent {
  EnteredTitle = "";
  EnteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();
  onAddPost(){
    const post: Post = {
      title: this.EnteredTitle,
      content: this.EnteredContent
    };
    this.postCreated.emit(post);
  }

}
