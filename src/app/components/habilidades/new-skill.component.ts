import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router){
    
  }

  ngOnInit(): void {
      
  }

  onCreate():void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe( data => {
      alert("Hablilidad creada correctamente");
      this.router.navigate(['']);
    }, error => {
      alert("Error al añadir la habilidad");
      this.router.navigate(['']);
    });
  }


}
