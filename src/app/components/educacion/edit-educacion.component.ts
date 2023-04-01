import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {

  educacion: Educacion = null;
  imagenSrc: any;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imagenService.url="";
    this.sEducacion.detail(id).subscribe(
      data => {
        this.educacion = data;
        this.imagenSrc = data.img;
      }, err => {
        alert("Error al modificar Educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if( this.imagenService.url != ""){
      this.educacion.img = this.imagenService.url;
    }
 
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Educacion");
        this.router.navigate(['']);
      }
    )
  }

  async uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name= "fotoEducacion_" + this.educacion.nombreE;
    this.imagenSrc = await this.imagenService.uploadImage($event, name)
    this.imagenSrc = this.imagenService.url; 

    document.getElementById('imagen').style.display='block';
  }


}
