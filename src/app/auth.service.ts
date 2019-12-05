import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    // setInterval(() => {
    //   this.isAdmin()
    //     .subscribe((res) => {
    //       console.log('Is admin? - ', res['ok'] ? 'yes' : 'no');
    //       if (!res['ok']) {
    //         localStorage.clear();
    //         router.navigate(['/login']);
    //       }
    //     });
    // }, 5000);
  }

  isAdmin() {
    return this.http.post('/handle.php', {
      action: 'checkauth',
      key: this.getKey(),
    });
  }

  checkAdmin(password: string) {
    return this.http.post('/handle.php', { action: 'auth', password });
  }

  setKey(key: string) {
    localStorage.setItem('key', key);
  }

  getKey() {
    return localStorage.getItem('key');
  }
}
