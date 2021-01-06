import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TinkaPage } from './tinka.page';

describe('TinkaPage', () => {
  let component: TinkaPage;
  let fixture: ComponentFixture<TinkaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinkaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TinkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
