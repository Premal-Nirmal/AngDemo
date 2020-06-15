import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls:['./post-create.component.css']
})

export class PostCreateComponent {
  EnteredTitle = "";
  EnteredContent = "";
  @Output() postCreated = new EventEmitter();

  onAddPost(){
    const post = {
      title: this.EnteredTitle,
      content: this.EnteredContent
    };
    this.postCreated.emit(post);
  }

}
