import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/projects/projects/models/project';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/projects.service';


@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  public project: Project;
  public projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.initProj();
  }
  public saveProject() {
    this.projectsService.saveProject(this.project);
    this.initProj();
    }

  public initProj() {
    this.project = {
      id: 0,
      name: ''
    };
    this.projects = [];
  }
}
