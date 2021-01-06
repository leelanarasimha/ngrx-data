import { Observable } from 'rxjs';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.entities$;
  }
}
