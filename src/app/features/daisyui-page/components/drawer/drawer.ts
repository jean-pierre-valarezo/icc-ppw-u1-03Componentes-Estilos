import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';
import { ThemeSwitcherComponent } from '../../../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, RouterOutlet,ThemeSwitcherComponent],
  templateUrl: './drawer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer { }
