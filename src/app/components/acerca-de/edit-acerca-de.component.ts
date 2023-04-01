import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenService } from 'src/app/service/imagen.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;
  imagenSrc: any;

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.imagenService.url = "";
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
        this.imagenSrc = data.img;
      }, err => {
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    )

  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.imagenService.url != "") {
      this.persona.img = this.imagenService.url;
    }
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Persona");
        this.router.navigate(['']);
      }
    )
    this.imagenService.clearUrl();

  }

  async uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "fotoPerfil_" + this.persona.nombre;
    this.imagenSrc = await this.imagenService.uploadImage($event, name)
    this.imagenSrc = this.imagenService.url;

  }




}
