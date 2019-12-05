import { Component, OnInit } from '@angular/core';
import { PostsManagerService, post } from '../posts-manager.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: post[] = [];

  constructor(private http: PostsManagerService) { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.http.getList().subscribe(ps => this.posts = ps);
  }

  delete(id: number, index: number) {
    return this.http.deletePost(id)
      .subscribe((response) => {
        if (response['ok']) {
          alert('The post is deleted successfully.');
          this.posts.splice(index, 1);
        } else {
          alert('The fail to delete the post.');
        }
      });
  }
}
