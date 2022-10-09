import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
  {
    path: 'app4',
    component: EmptyRouteComponent,
    children: [
      {
        path: 'a',
        component: AComponent,
      },
      {
        path: 'b',
        component: BComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
