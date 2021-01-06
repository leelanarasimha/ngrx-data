import { PostsResolver } from './posts/posts.resolver';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    component: PostsListComponent,
    resolve: { posts: PostsResolver },
  },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/edit/:id', component: EditPostComponent },
  { path: 'posts/details/:id', component: SinglePostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
