import { Component, OnInit } from '@angular/core';
import { Project } from './models/project';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

public projects: Project[];
public project: Project;
  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  constructor() { }


  ngOnInit() {
    this.projects = environment.projects;
  }

}
