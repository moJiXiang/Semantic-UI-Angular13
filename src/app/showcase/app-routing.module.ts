import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    loadChildren: () =>
      import('./components/buttondemo/buttondemo.module').then(
        (m) => m.ButtonDemoModule
      ),
  },
  {
    path: 'divider',
    loadChildren: () =>
      import('./components/dividerdemo/dividerdemo.module').then(
        (m) => m.DividerDemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
