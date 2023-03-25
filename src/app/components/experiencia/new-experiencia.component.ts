import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{

  nombreE: string = '';
  descripcionE: string = '';
  img: string ='';
  fecha_inicio= new Date();
  fecha_fin = new Date();
  empleador= '';


  constructor(private sExperiencia: SExperienciaService, private router: Router){}

  ngOnInit():void{

  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.img, this.fecha_inicio, this.fecha_fin,this.empleador);
    this.sExperiencia.save(expe).subscribe( data => {
      alert("Experiencia añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
