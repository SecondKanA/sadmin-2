import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-text-editing',
  templateUrl: './text-editing.component.html',
  styleUrls: ['./text-editing.component.css']
})
export class TextEditingComponent implements OnInit {
  textsMeta: { name: string; title: string}[] = [];
  private selname: string = '';
  title: string = '';
  content: string = '';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.getTextNames()
      .subscribe((list: Array<any>) => {
        this.textsMeta = list.map((el) => {
          el['title'] = el['title_ru'];
          delete el['title_ru'];
          return el;
        });

        if (list[0]) {
          this.selectText(list[0]['name']);
        }
      });
  }

  selectText(name) {
    this.selname = name;
    this.getTextContent(name)
      .subscribe((res) => {
        if (!res['ok']) return alert('ERROR');
        this.title = res['title_ru'];
        this.content = res['content_ru'];
      });
  }

  submit() {
    const selname = this.selname;
    const title = this.title;
    this.http.post('/handle.php', {
      action: 'edittext',
      name: selname,
      title_ru: title,
      content_ru: this.content,
      key: this.auth.getKey(),
    }).subscribe((rs) => {
      if (rs['ok']) {
        const textMeta = this.textsMeta.find((t) => {
          return t.name === selname;
        });

        textMeta.title = title;

        alert('[UPDATE]: Success');
      } else {
        alert('[UPDATE]: Fail');
      }
    });
  }

  getTextNames() {
    return this.http.get(
      '/handle.php?action=listtexts&key=' + this.auth.getKey());
  }

  getTextContent(name) {
    return this.http.get(
      `/handle.php?action=gettext&name=${name}&key=`
        + this.auth.getKey());
  }

}
