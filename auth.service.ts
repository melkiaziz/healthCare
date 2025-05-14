import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private userRole: string | null = null;

  constructor() { }

  login(username: string, password: string): boolean {
    // This is a simple mock implementation
    // In a real application, you would make an HTTP request to your backend
    if (username === 'administrator' && password === 'admin') {
      this.isLoggedIn = true;
      this.userRole = 'administrator';
      return true;
    } else if (username === 'doctor' && password === 'doctor') {
      this.isLoggedIn = true;
      this.userRole = 'doctor';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): string | null {
    return this.userRole;
  }
}
