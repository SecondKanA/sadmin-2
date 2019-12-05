import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  allowView = false;
  originHref = location.origin;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    auth.isAdmin()
      .subscribe((res) => {
        if (!res['ok']) {
          router.navigate(['/login'])
          this.allowView = false;
        } else {
          this.allowView = true;
        }
      });
  }

  ngOnInit() {
  }
}
