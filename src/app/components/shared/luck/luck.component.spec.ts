import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuckComponent } from './luck.component';

describe('LuckComponent', () => {
  let component: LuckComponent;
  let fixture: ComponentFixture<LuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
