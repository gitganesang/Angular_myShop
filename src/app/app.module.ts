import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './components/my-card/my-card.component';
import { MyToDoComponent } from './components/my-to-do/my-to-do.component';
import { MyInventoryComponent } from './components/my-inventory/my-inventory.component';
import { MyProfileCardComponent } from './components/my-profile-card/my-profile-card.component';
import { HttpClientModule } from "@angular/common/http";
import { MyRegisterFormService } from './service/my-register-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyRegisterFormComponent } from './components/my-register-form/my-register-form.component';
import { MyToDoListComponent } from './components/my-to-do-list/my-to-do-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MyToDoComponent,
    MyInventoryComponent,
    MyProfileCardComponent,
    MyRegisterFormComponent,
    MyToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [MyRegisterFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }