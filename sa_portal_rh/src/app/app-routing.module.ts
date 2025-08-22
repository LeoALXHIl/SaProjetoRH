import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { PainelCurriculosComponent } from './view/painel-curriculos/painel-curriculos.component';
import { CurriculosCadastroComponent } from './view/curriculos-cadastro/curriculos-cadastro.component';
import { LoginComponent } from './view/login/login.component';
import { RegistroComponent } from './view/registro/registro.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { AdminVagasComponent } from './view/admin-vagas/admin-vagas.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'vaga-listar', component: PainelVagasComponent, canActivate: [AdminGuard] },
  { path: 'curriculos', component: CurriculosComponent, canActivate: [AdminGuard] },
  { path: 'curriculos-listar', component: PainelCurriculosComponent, canActivate: [AdminGuard] },
  { path: 'curriculos-cadastro', component: CurriculosCadastroComponent, canActivate: [AuthGuard] },
  { path: 'curriculos-editar/:cpf', component: CurriculosCadastroComponent, canActivate: [AdminGuard] },
  { path: 'curriculo', component: CurriculoComponent, canActivate: [AuthGuard] },
  { path: 'admin-vagas', component: AdminVagasComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
