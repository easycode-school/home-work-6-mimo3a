import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postsArray;
  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (posts) => {
        this.postsArray = posts;
        console.log('Next', posts); }
  );
  }

}
