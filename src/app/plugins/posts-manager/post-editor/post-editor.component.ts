import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsManagerService, post } from '../posts-manager.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  @ViewChild('editor', { static: false }) editorRef: ElementRef;
  data: post = {
    title: '',
    text: '',
    date: '',
    id: 0,
    preview_url: '',
  };

  id: post['id'];

  private fileReader = new FileReader;

  constructor(
    private http: PostsManagerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.fileReader.addEventListener('load', () => {
      this.data.preview_url = this.fileReader.result + '';
    }, false);
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id != null) {
      this.id = id;
      this.http
        .getPost(this.id)
        .subscribe(rs => {
          this.data = rs;
        });
    }
  }

  preview(input: HTMLInputElement) {
    const file = input.files[0];
    if (file == null) return;
    this.fileReader.readAsDataURL(file);
  }

  async submit() {
    const formData = this.data;

    if (this.id) { // if update
      this.http.updatePost(formData)
        .subscribe((rs) => {
          alert(`[UPDATE]: ${rs['ok'] ? 'Success' : 'Fail'}`);
        });
    } else { // to create new
      this.http.newPost(formData)
        .subscribe((rs) => {
          if (!rs['ok']) {
            alert('[UPDATE]: Fail');
            return;
          }
          this.router.navigate([ '/', 'posts', 'edit', this.data.id ])
        });
    }
  }
}
