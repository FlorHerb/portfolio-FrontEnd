import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombre: string = '';
  anio : string = '';
  descripcion: string = '';
  img: string = '';
 


  constructor(private sProyecto: ProyectoService, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    this.imagenService.clearUrl();

  }

  onCreate(): void {
    const proy = new Proyecto(this.nombre, this.anio, this.descripcion, this.img);
    proy.img= this.imagenService.url;
    
    this.sProyecto.save(proy).subscribe(data => {
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })

    this.imagenService.clearUrl();
  }

  uploadImage($event: any) {
    const name = "fotoProyecto_" + this.nombre;
    this.imagenService.uploadImage($event, name);
    document.getElementById('imagen').style.display="block";
  }

}
