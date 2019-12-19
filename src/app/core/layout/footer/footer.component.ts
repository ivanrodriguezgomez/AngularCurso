import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/projects/models/project';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  public obs$;

  ngOnInit() {
  }

}
