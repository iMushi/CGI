import { Routes } from '@angular/router';
//Layouts
import { BlankSimplywhiteComponent, Consulta, SimplyWhiteLayout } from './@pages/layouts';
//Sample Pages
import { SimplyWhiteDashboardComponent } from './dashboard/simplywhite/dashboard.component';
import { CardsComponentPage } from './cards/cards.component';
import { ViewsPageComponent } from './views/views.component';
import { ChartsComponent } from './charts/charts.component';
import { SocialComponent } from './social/social.component';
import { ConsultaComponent } from './@pages/layouts/consulta/consulta.component';

export const AppRoutes: Routes = [

  //Simply White Routes
  {
    path: 'consulta',
    component: ConsultaComponent
  },

  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'dashboard',
      component: SimplyWhiteDashboardComponent
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'extra',
      loadChildren: './extra/extra.module#ExtraModule'
    }]
  }, {
    path: 'simplywhite',
    component: BlankSimplywhiteComponent,
    children: [{
      path: 'session',
      loadChildren: './session/session.module#SessionModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'social',
      component: SocialComponent
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'forms',
      loadChildren: './forms/forms.module#FormsPageModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'layouts',
      loadChildren: './layouts/layouts.module#LayoutPageModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'builder',
      loadChildren: './builder/builder.module#BuilderModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'ui',
      loadChildren: './ui/ui.module#UiModule'
    }]
  }, {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'email',
      loadChildren: './email-light/email.module#EmailLightModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'cards',
      component: CardsComponentPage
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'views',
      component: ViewsPageComponent
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule'
    }]
  },
  {
    path: 'simplywhite',
    component: SimplyWhiteLayout,
    children: [{
      path: 'charts',
      component: ChartsComponent
    }]
  }

];
