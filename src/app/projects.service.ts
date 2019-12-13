import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from './projects/projects/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  public saveProject(project: Project) {
    environment.projects.push({ ...project });
    }




}
