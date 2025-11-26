import { Component,inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../services/ThemeService';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './theme-switcher.html',
})
export class ThemeSwitcherComponent {
  // Temas disponibles
  themes = ['light', 'dark', 'business'];


  private themeService = inject(ThemeService);


  currentTheme = this.themeService.currentTheme;

  setTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

  // Tema actual reactivo
 // currentTheme = signal<string>(this.getCurrentTheme());

  

  // Obtiene el tema actual desde el atributo HTML
  /*
  private getCurrentTheme(): string {
    return document.documentElement.getAttribute('data-theme') ?? 'light';
  }

  // Cambia el tema y actualiza el atributo global
  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);
  }
    */
}