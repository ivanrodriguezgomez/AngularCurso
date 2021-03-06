import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }
  public numProjects$: Observable<any>;



  ngOnInit() {
    this.numProjects$ = this.projectsService.countProjects();
  }

}
