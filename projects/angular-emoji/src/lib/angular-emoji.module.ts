import { NgModule } from '@angular/core';
import { AngularEmojiComponent } from './angular-emoji.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularEmojiComponent],
  imports: [CommonModule],
  exports: [AngularEmojiComponent],
})
export class AngularEmojiModule {}
