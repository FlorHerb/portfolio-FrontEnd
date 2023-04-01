import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string = '';
  descripcionE: string = '';
  img: string = '';
  fecha_inicio : string = '';
  fecha_fin : string = '';
  institucion = '';


  constructor(private sEducacion: EducacionService, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {


  }

  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.descripcionE, this.img, this.fecha_inicio, this.fecha_fin, this.institucion);
    edu.img= this.imagenService.url;
    this.sEducacion.save(edu).subscribe(data => {
      alert("Educacion añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló la creación de educación" + err.message);
      this.router.navigate(['']);
    })

    this.imagenService.clearUrl();
  }

  uploadImage($event: any) {
    const name = "fotoEducacion_" + this.nombreE;
    this.imagenService.uploadImage($event, name);
    document.getElementById("imagen").style.display="block";
  }
}
