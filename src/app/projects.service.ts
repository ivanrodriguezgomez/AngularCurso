import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './projects/projects/models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

interface responseCounter {
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }
  // constructor() { }
  private projects: Project[];
  private project: Project;
  private counterProjects: number;
  private urlApi = 'https://api-base.herokuapp.com/api/pub/projects';
  private urlCountApi = 'https://api-base.herokuapp.com/api/pub/projects/count';
  public projects$: Observable<Project> = null;


public initProject() {
  this.project = {
    id: 0,
    name: ''
  };
  return this.project;
}

// public createProject(project: Project) {
//   environment.projects.push({ ...project });
//   }

// public readProjects() {
//   return environment.projects;
// }

public countProjects() {
  this.httpClient
    .get<responseCounter>(this.urlCountApi).subscribe(result => {this.counterProjects = result.count; });
  return this.counterProjects;
}

public postProject(project: Project) {
  this.httpClient
    .post(this.urlApi, project)
    .subscribe();
  // environment.projects.push({ ...project });
  }

  public getProjects() {
    // this.projects$ = this.httpClient.get(this.urlCountApi).pipe(map(this.project));
    // return this.projects$;
    this.httpClient
   .get<Project[]>(this.urlApi).subscribe(result => (this.projects = result));
    return this.projects;
    }


}
