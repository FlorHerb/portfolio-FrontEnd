import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];


  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { this.experiencia = data; })
  }


  eliminarExperiencia(id: number): void {
    this.sExperiencia.delete(id).subscribe(
      data => {
        this.cargarExperiencia();
      }, err => {
        alert("Error al eliminar");
        this.cargarExperiencia();
      }
    )
  }
}