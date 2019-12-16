import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styleUrls: ['./new-project-form-component.component.css']
})
export class NewProjectFormComponentComponent implements OnInit {
@Input() public project: Project;
@Output() public save = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
