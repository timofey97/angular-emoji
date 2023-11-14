import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularEmojiComponent } from './angular-emoji.component';
import emojiDataJson from './emoji.json';
describe('AngularEmojiComponent', () => {
  let component: AngularEmojisComponent;
  let fixture: ComponentFixture<AngularEmojisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularEmojisComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct emoji', () => {
    component.name = 'smile';
    fixture.detectChanges();
    expect(component.emojiIcon).toBe(emojiDataJson['smile']);
  });

  it('should have correct size', () => {
    component.size = '40';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.style.fontSize).toBe('40px');
  });

  // Дополнительные тесты могут быть добавлены для проверки других аспектов компонента
});
