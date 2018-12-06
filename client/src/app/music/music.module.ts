import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { MusicRoutingModule } from './music.routing';

@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
