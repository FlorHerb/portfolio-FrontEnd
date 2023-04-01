import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyecto: Proyecto[] = [];


  constructor(private sProyecto: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(
      data => { this.proyecto = data; })
  }


  eliminarProyecto(id: number): void {
    this.sProyecto.delete(id).subscribe(
      data => {
        this.cargarProyecto();
      }, err => {
        alert("Error al eliminar");
        this.cargarProyecto();
      }
    )
  }

}
