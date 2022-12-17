import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulerPage } from './scheduler.page';

describe('SchedulerPage', () => {
  let component: SchedulerPage;
  let fixture: ComponentFixture<SchedulerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/home/home.page.spec.ts
      declarations: [ HomePage ],
=======
      declarations: [ SchedulerPage ],
>>>>>>> 21adc6e (feat: スケジューラーの置き換え):src/app/scheduler/pages/scheduler/scheduler.page.spec.ts
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
