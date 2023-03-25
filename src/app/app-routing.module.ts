import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'login', component: IniciarSesionComponent },
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'editexp/:id', component: EditExperienciaComponent},
/* {path: 'nuevaedu', component: NewEducacionComponent},
{path: 'editedu/:id', component: EditEducacionComponent},
{path: 'nuevoproyecto', component: NewProyectoComponent},
{path: 'editproyecto/:id', component: EditProyectoComponent}, */
{path: 'nuevaskill', component: NewSkillComponent},
{path: 'editskill/:id', component: EditSkillComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
