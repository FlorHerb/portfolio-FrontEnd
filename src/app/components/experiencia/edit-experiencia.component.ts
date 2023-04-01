import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experiencia: Experiencia = null;
  imagenSrc: any;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imagenService.url="";
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.experiencia = data;
        this.imagenSrc = data.img;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if( this.imagenService.url != ""){
      this.experiencia.img = this.imagenService.url;
    }
    this.sExperiencia.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }




  async uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "fotoExperiencia_" + this.experiencia.nombreE
    this.imagenSrc = await this.imagenService.uploadImage($event, name)
    this.imagenSrc = this.imagenService.url;

    document.getElementById('imagen').style.display = 'block';
  }


}
