import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer-project-form-component',
  templateUrl: './viewer-project-form-component.component.html',
  styleUrls: ['./viewer-project-form-component.component.css']
})
export class ViewerProjectFormComponentComponent implements OnInit {

  constructor() { }
@Input() public projectId: number;
  ngOnInit() {
  }

}
