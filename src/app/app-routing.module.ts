import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCardComponent } from './components/my-card/my-card.component';
import { MyInventoryComponent } from './components/my-inventory/my-inventory.component';
import { MyProfileCardComponent } from './components/my-profile-card/my-profile-card.component';
import { MyRegisterFormComponent } from './components/my-register-form/my-register-form.component';
import { MyToDoListComponent } from './components/my-to-do-list/my-to-do-list.component';
import { MyToDoComponent } from './components/my-to-do/my-to-do.component';

const routes: Routes = [
  { path: 'my-card', component: MyCardComponent },
  { path: 'my-inventory', component: MyInventoryComponent },
  { path: 'my-profile-card', component: MyProfileCardComponent },
  { path: 'my-register-form', component: MyRegisterFormComponent },
  { path: 'my-to-do', component: MyToDoComponent },
  { path: 'my-to-do-list', component: MyToDoListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
