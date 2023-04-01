import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto: Proyecto = null;
  imagenSrc: any;

  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imagenService.url="";
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
        this.imagenSrc= data.img;
      }, err => {
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if( this.imagenService.url != ""){
      this.proyecto.img = this.imagenService.url;
    }
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

  async uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name= "fotoProyecto_" + this.proyecto.nombre
    this.imagenSrc = await this.imagenService.uploadImage($event, name)
    this.imagenSrc = this.imagenService.url; 

    document.getElementById('imagen').style.display='block';
  }


}
