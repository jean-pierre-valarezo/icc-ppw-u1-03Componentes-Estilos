import { Routes } from '@angular/router';
import { DaisyuiPageComponent } from './features/daisyui-page/daisyui-page';
import { SimpsonsPage } from './features/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';
import { EstilosPage } from './features/estilos-page/estilos-page';

export const routes: Routes = [
        
   {
    path: '',
    component: DaisyuiPageComponent
   },
   {
  path: 'simpsons',
    component: SimpsonsPage
},
    {
        path: 'estilos',
        component: EstilosPage
    },
{
  path: 'simpsons/:id',
    component: SimpsonDetailPageComponent
}
    
    
];
