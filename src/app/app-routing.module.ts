import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path:"", pathMatch:'full',redirectTo:'home'},
  {path:"nosotros", component:NosotrosComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"servicios", component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
