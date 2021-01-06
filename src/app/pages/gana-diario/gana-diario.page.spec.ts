import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GanaDiarioPage } from './gana-diario.page';

describe('GanaDiarioPage', () => {
  let component: GanaDiarioPage;
  let fixture: ComponentFixture<GanaDiarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanaDiarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GanaDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
