import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/projects.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

// public projects: Project[];
public projects$: Observable<Project[]>;
public project: Project;
public filterProj: number;
public numProjects$: Observable<any>;
  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  changeProject(filterProj: number) {

    this.filterProj = filterProj;
  }

  constructor(private projectsService: ProjectsService) { }


  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();
  }

}
