import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './projects/projects/models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

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
  private counterProjects$: Observable<any>;
  public count: number;
  private urlApi = 'https://api-base.herokuapp.com/api/pub/projects';
  private urlCountApi = 'https://api-base.herokuapp.com/api/pub/projects/count';
  // public projects$: Observable<Project> = null;
  public projects$: Observable<any>;

public initProject() {
  this.project = {
    id: 0,
    name: ''
  };
  return this.project;
}

public countProjects() {
  this.counterProjects$ = this.httpClient.get(this.urlCountApi).pipe(share());
  return this.counterProjects$ ;
}

public postProject(project: Project) {
  this.httpClient
    .post(this.urlApi, project)
    .subscribe();
  }

  public getProjects() {
    this.projects$ = this.httpClient.get(this.urlApi).pipe(share());
    return this.projects$;
    }


}
