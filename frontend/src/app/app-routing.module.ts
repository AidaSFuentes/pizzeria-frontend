import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PedidoComponent} from './pedidos/pedido/pedido.component';
import { UsuarioModule } from './usuarios';

const routes: Routes = [
  { path: '', component: CatalogoComponent, pathMatch: 'full'},
  { path: 'pedido', component: PedidoComponent, pathMatch: 'full'},
  { path: 'pedido/:id', component: PedidoComponent, pathMatch: 'full'},
  { path: 'pizzas', loadChildren: () => import('./pizzas/pizza.module').then(mod => mod.PizzaModule)},
  { path: 'ingredientes', loadChildren: () => import('./ingredientes/ingrediente.module').then(mod => mod.IngredienteModule)},
  { path: 'usuarios', loadChildren: () => import ('./usuarios/usuarios.module').then(mod => UsuarioModule)},


// ingrediente, compra, usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
