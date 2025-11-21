import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/estilos-page/estilos-page').then(c => c.EstilosPage)
    }
    
];
