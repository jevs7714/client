import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Post_i } from './postInterface';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
    constructor(private post: PostService) {}
    posts: Post_i[] = [];

    ngOnInit() {
        this.post.getAll().subscribe((data) => {
            this.posts = data;
        });
    }



}
