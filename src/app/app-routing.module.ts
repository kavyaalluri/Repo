import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { NavComponent } from './components/nav/nav.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'' , redirectTo:'contacts/admin',pathMatch:'full'},
  {path:'contacts/add' , component:AddComponent},
  {path:'contacts/edit/:contactId' , component:EditComponent},
  {path:'contacts/view/:contactId' , component:ViewComponent},
  {path:'contacts/admin', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
