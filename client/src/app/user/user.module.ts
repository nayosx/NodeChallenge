import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxDatatableModule
  ]
})
export class UserModule { }
