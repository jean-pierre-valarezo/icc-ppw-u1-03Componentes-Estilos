import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

   private readonly THEME_KEY = 'app-theme';

  // Signal para el tema actual
  currentTheme = signal<string>(this.getStoredTheme());

  constructor() { 
    this.applyTheme(this.currentTheme());
  }
   saveTheme(theme: string): void {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
      console.warn('LocalStorage no disponible', e);
    }
  }

  /** Obtiene el tema almacenado */
  private getStoredTheme(): string {
    try {
      return localStorage.getItem(this.THEME_KEY) ?? 'light';
    } catch {
      return 'light';
    }
  }

  /** Aplica el tema al <html data-theme=""> */
  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  /** Cambia el tema global */
  setTheme(theme: string): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
    this.saveTheme(theme);
  }
}
