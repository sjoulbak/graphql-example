import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
export type MaybePromise<T> = Promise<T> | T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  /** An example field added by the generator */
  testField: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  userResult: User;
};

export type QueryUserResultArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  friends: Array<User>;
};
export type UserResultQueryVariables = {
  id: Scalars["ID"];
};

export type UserResultQuery = { __typename?: "Query" } & {
  userResult: { __typename?: "User" } & Pick<User, "email"> & {
      friends: Array<{ __typename?: "User" } & Pick<User, "email">>;
    };
};

export const UserResultDocument = gql`
  query userResult($id: ID!) {
    userResult(id: $id) {
      email
      friends {
        email
      }
    }
  }
`;

@Injectable({
  providedIn: "root"
})
export class UserResultGQL extends Apollo.Query<
  UserResultQuery,
  UserResultQueryVariables
> {
  document = UserResultDocument;
}
export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;
