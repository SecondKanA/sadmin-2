import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { generate as shortid } from 'shortid';

import { AuthService } from '../../auth.service';

export type post = {
  title: string;
  id: number;
  text: string;
  date: string;
  preview_url: string;
};

@Injectable({
  providedIn: 'root'
})
export class PostsManagerService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  getPost(id: number) {
    return this.http.get<post>(
      `/handle.php?action=getpost&id=${id}&` +
      `key=${this.auth.getKey()}`
    );
  }

  getList() {
    return this.http.get<post[]>(
      '/handle.php?action=listposts&' +
      `key=${this.auth.getKey()}`
    );
  }

  newPost(data: Partial<post>) {
    const pr = this.http.post('/handle.php', {
      action: 'newpost',
      key: this.auth.getKey(),
      title: data.title,
      text: '.',
    }).toPromise()
      .then((async (res) => {
        if (!res['ok']) return;
        data.id = res['id'];
      }))
      .then(async (rs) => this.updatePost(data).toPromise());

    return from(pr);
  }

  updatePost(data: Partial<post>) {
    return from(this.uploadImagesFromPost(data))
      .pipe(mergeMap(() =>
        this.http.post('/handle.php', {
          action: 'editpost', ...data,
          key: this.auth.getKey(),
        })));
  }

  deletePost(id: number) {
    return this.http.delete(
      `/handle.php?action=deletepost&id=${id}&` +
      `key=${this.auth.getKey()}`
    );
  }

  private async uploadImagesFromPost(post: Partial<post>) {
    const html = document.createElement('div');
    html.innerHTML = post.text;
    const postId = post.id;
    const images: HTMLImageElement[] = Array.from(
        html.querySelectorAll('img[src^="data:image/"]'));
    for (const image of images) {
      const path = await this.uploadImage(image.src, postId);
      image.src = path;
    }
    post.text = html.innerHTML;
    console.log('post.preview_url: ', post.preview_url);
    if (post.preview_url
      && post.preview_url.startsWith('data:image/')) {
      post.preview_url = await this
        .uploadImage(post.preview_url, post.id);
    }
    console.log('post.preview_url: ', post.preview_url);
  }

  uploadImage(dataUrl: string, postId): Promise<string> {
    const ext = /^data:image\/(\w+)/.exec(dataUrl)[1];
    const file = this.imgDataUrlToFile(dataUrl, `image.${ext}`);

    const formData = new FormData;
    formData.append('image', file);
    formData.append('postid', postId);
    // formData.append('s_key', 'admin_key');

    return fetch(
      '/handle.php?action=uploadimage&key=' + this.auth.getKey(),
    {
      method: 'POST',
      body: formData
    }).then((res) => res.json())
      .then((json) => {
        console.log('files: ', json);
        return json['filepaths']['image'];
      });
  }

  private imgDataUrlToFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while(n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
}
