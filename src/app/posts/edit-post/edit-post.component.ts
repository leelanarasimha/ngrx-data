import { PostService } from './../post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  id: string;

  constructor(
    private PostService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editPostForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
    });

    this.id = this.route.snapshot.params['id'];
    this.PostService.entities$.subscribe((posts) => {
      if (posts.length) {
        const post = posts.find((post) => post.id === this.id);
        this.editPostForm.patchValue({
          title: post.title,
          description: post.description,
        });
      }
    });
  }

  onEditPost() {
    const postData = {
      ...this.editPostForm.value,
      id: this.id,
    };

    this.PostService.update(postData);
    this.router.navigate(['/posts']);
  }
}
