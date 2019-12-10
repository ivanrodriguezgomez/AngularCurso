import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
    },
    {
    path: 'viewer',
    loadChildren: './projects/projects.module#ProjectsModule'
    },
    {
    path: 'not-found',
    component: NotFoundComponent
    },
    {
    path: '**',
    redirectTo: 'not-found'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
