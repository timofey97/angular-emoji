import { Component, Input, OnChanges, OnInit } from '@angular/core';
import emojiDataJson from './emoji.json';
// Определение типа для данных эмодзи
interface EmojiData {
  [key: string]: string;
}

const emojiData: EmojiData = emojiDataJson;

@Component({
  selector: 'angular-emojis',
  template: `
    <span [ngStyle]="{ 'font-size': size + 'px' }">
      {{ emojiIcon }}
    </span>
  `,
})
export class AngularEmojiComponent implements OnInit, OnChanges {
  @Input() name = 'smile';
  @Input() size = '30';
  emojiIcon: string | undefined;

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges() {
    this.update();
  }

  private update() {
    this.emojiIcon = emojiData[this.name];
  }
}
