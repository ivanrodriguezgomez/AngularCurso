import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule {

  }
