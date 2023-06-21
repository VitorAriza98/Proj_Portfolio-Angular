import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  @Input() projectImg: string = "";
  @Input() projectTitle: string = "";
  @Input() projectDesc: string = "";
  @Input() projectDemo: string = "";
  @Input() projectGit: string = "";

  ngOnInit(): void {}
}
