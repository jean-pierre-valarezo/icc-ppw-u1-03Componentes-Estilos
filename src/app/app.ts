import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Drawer } from "./features/daisyui-page/components/drawer/drawer";
import { AppFooter } from './features/daisyui-page/components/app-footer/app-footer';
import { BackToTop } from './shared/components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Drawer, AppFooter,BackToTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-ui-componentes-estilos');
}
