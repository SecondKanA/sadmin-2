import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(e: Event, input: HTMLInputElement) {
    e.preventDefault();
    const password = input.value;

    this.auth.checkAdmin(password)
      .subscribe((response) => {
        if (response['ok']) {
          this.auth.setKey(response['key']);
          this.router.navigate(['/']);
        } else {
          input.value = '';
          input.classList.add('invalid');
          input.focus();
        }
      });
  }
}
