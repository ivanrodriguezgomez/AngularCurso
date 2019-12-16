import { Component, OnInit, Input } from '@angular/core';

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
