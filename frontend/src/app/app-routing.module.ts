import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';

const routes: Routes = [
  {path: '', component: CartaComponent},
  { path: 'ingredientes', loadChildren: () => import('./ingredientes/ingredientes.module').then(mod => mod.IngredientesModule)},
  { path: 'pizzas', loadChildren: () => import('./pizzas/pizzas.module').then(mod => mod.PizzasModule)},
  { path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(mod => mod.UsuariosModule)},
  { path: 'pedidos', loadChildren: () => import('./pedidos/pedidos.module').then(mod => mod.PedidosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
