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

  constructor() { }
@Input() contador: Observable<any>;
public numProjects: Observable<any>;

  ngOnInit() {
    this.numProjects = this.contador;
  }

}