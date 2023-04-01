import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion: Educacion[] = [];


  constructor(private sEducacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => { this.educacion = data; })
  }


  eliminarEducacion(id: number): void {
    this.sEducacion.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("Error al eliminar");
        this.cargarEducacion();
      }
    )
  }

}
