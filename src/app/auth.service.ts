// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'users.json';
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): void {
    this.http.get(this.usersUrl).subscribe((data: any) => {
      console.log(data);
      const user = data.users.find(
        (u: any) => u.username === email && u.password === password
      );
      if (user) {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage.getItem('userEmail'));

        this.router.navigate(['/drone']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedin(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }
}
