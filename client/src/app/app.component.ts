import { Component } from '@angular/core';
import { UserResultGQL, UserResultQuery } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  user: Observable<ApolloQueryResult<UserResultQuery>>;

  constructor(
    userResultGql: UserResultGQL,
  ) {
    this.user = userResultGql.fetch({ id: '1' });
  }
}
