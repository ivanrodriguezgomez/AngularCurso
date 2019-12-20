import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css']
})
export class ProjectsSearchComponent implements OnInit {
  public projects$: Observable<Project[]>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.projectsService.getProjects();

  }

}
