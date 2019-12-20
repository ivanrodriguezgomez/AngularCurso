import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }
@Input() contador: Observable<any>;
public numProjects: Observable<any>;
public project: Project;

  ngOnInit() {
    this.numProjects = this.contador;
    // SI no hay proyectos al arrancar, creamos 3 para hacer pruebas.
    if (this.numProjects === null)
    {
      this.initializeProjectTest();
    }
  }


  private initializeProjectTest() {
    this.project = {
      id: 1, name: 'Proyecto 1', description: 'Descripcion proyecto 1', done: true };
    this.projectsService.postProject(this.project);
    this.project = {
      id: 2, name: 'Proyecto 2', description: 'Descri proyecto 2', done: true };
    this.projectsService.postProject(this.project);
    this.project = {
      id: 3, name: 'Proyecto 3', description: 'Desc 3', done: false };
    this.projectsService.postProject(this.project);
}
}
