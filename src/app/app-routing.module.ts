import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { postListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/posts-create/posts-create.component';


const routes: Routes = [
  { path: '', component: postListComponent }, // if path is empty means the main page
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
