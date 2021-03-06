import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ViewerProjectFormComponentComponent } from './projects/viewer-project-form-component/viewer-project-form-component.component';
import { NewProjectFormComponentComponent } from './projects/new-project-form-component/new-project-form-component.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectsSearchComponent } from './projects/projects-search/projects-search.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent,
    FilterProjectsFormComponent, ProjectsListComponent,
    ViewerProjectFormComponentComponent, NewProjectFormComponentComponent, ProjectsSearchComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule {

  }
