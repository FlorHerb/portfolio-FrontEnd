import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';
  img: string = '';
  fecha_inicio : string = '';
  fecha_fin : string = '';
  empleador = '';


  constructor(private sExperiencia: SExperienciaService, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    this.imagenService.clearUrl();

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.img, this.fecha_inicio, this.fecha_fin, this.empleador);
    expe.img= this.imagenService.url;
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })

    this.imagenService.clearUrl();
  }

  uploadImage($event: any) {
    const name = "fotoExperiencia_" + this.nombreE;
    this.imagenService.uploadImage($event, name);
    document.getElementById("imagen").style.display="block";
  }

}
