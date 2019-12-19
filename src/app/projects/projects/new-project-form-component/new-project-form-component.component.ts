import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form-component',
  templateUrl: './new-project-form-component.component.html',
  styleUrls: ['./new-project-form-component.component.css']
})
export class NewProjectFormComponentComponent implements OnInit {
@Input() public project: Project;
@Output() public save = new EventEmitter();
public formProject: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formProject = this.formBuilder.group({
    ID: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    done: [false, [Validators.required]]
    });
}
}
