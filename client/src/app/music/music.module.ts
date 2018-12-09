import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicRoutingModule } from './music.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlbumFilterPipe } from './album-filter.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MusicComponent,
    AlbumFilterPipe
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ]
})
export class MusicModule { }
