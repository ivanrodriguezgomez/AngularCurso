import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
})
export class ViewerprojectComponent implements OnInit {
public projectId: number;
public projectName: string;
public projects: Project[];
public project: Project;
  constructor(activateRoute: ActivatedRoute, private projectService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
