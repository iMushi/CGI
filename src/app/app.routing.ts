import { Routes } from '@angular/router';
//Layouts
import { ConsultaComponent } from './@pages/layouts';
//Sample Pages
import { FlashVentasComponent } from './flash-ventas/flash-ventas.component';

export const AppRoutes: Routes = [

  //Simply White Routes
  {
    path: 'consulta',
    component: ConsultaComponent,
    children: [{
      path: 'flash-ventas',
      component: FlashVentasComponent
    }]
  }

];
