import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../auth.service';

type contacts = {
  address: string;
  copyright: string;
  gmail: string;
  tel: string;
  telegram?: string;
  instagram?: string;
};

@Component({
  selector: 'app-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  data: contacts = {
    address: '',
    copyright: '',
    gmail: '',
    tel: '',
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.http.get<contacts>(
      '/handle.php?action=getcontacts&key=' + this.auth.getKey()
    ).subscribe(res => this.data = res);
  }

  submit() {
    this.http.post('/handle.php', {
      ...this.data,
      action: 'editcontacts',
      key: this.auth.getKey(),
    }).subscribe((res) => {
      if (res['ok']) alert('[UPDATE]: success');
      else alert('[UPDATE]: FAIL');
    });
  }
}
