import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';


const routes: Routes = [
{
  path: '',
  component: ProjectsComponent,
  children: [
    {
      path: ':id',
      component: ViewerprojectComponent
    },
    {
      path: '/newproject',
      component: NewprojectComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
