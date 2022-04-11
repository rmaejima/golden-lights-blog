/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_nextJsBlogCollection_items {
  __typename: "NextJsBlog";
  title: string | null;
}

export interface GetArticles_nextJsBlogCollection {
  __typename: "NextJsBlogCollection";
  items: (GetArticles_nextJsBlogCollection_items | null)[];
}

export interface GetArticles {
  nextJsBlogCollection: GetArticles_nextJsBlogCollection | null;
}
