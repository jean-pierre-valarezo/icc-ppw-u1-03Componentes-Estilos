import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drawer } from './components/drawer/drawer';
import { Code } from './components/code/code';
import { Tablecomponent } from './components/tablecomponent/tablecomponent';
import { Cardcomponent } from './components/cardcomponent/cardcomponent';
import { Cardresponsive } from './components/cardresponsive/cardresponsive';
import { AppFooter } from './components/app-footer/app-footer';
@Component({
  selector: 'app-daisyui-page',
  standalone: true,
  imports: [CommonModule, Drawer, Code, Tablecomponent, Cardcomponent, Cardresponsive, AppFooter],
  templateUrl: './daisyui-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyuiPageComponent {

}