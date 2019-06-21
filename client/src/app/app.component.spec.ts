import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { ApolloModule } from 'apollo-angular';
import { UserResultDocument } from 'src/generated/graphql';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let apollo: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApolloTestingModule,
        ApolloModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    apollo = TestBed.get(ApolloTestingController);
  }));

  afterEach(() => {
    apollo.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display the users email', (done) => {
    component.user.subscribe(result => {
      expect(result.data.userResult.email).toEqual('hi@test.test');
      done();
    });

    apollo.expectOne(UserResultDocument).flush({
      data: {
        userResult: {
          email: 'hi@test.test',
          friends: []
        }
      }
    });
  });
});
