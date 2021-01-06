import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KabalaPage } from './kabala.page';

describe('KabalaPage', () => {
  let component: KabalaPage;
  let fixture: ComponentFixture<KabalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabalaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KabalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
