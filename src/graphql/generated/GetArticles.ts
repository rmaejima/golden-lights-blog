/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_nextJsBlogCollection_items_content {
  __typename: "NextJsBlogContent";
  json: any;
}

export interface GetArticles_nextJsBlogCollection_items_image {
  __typename: "Asset";
  title: string | null;
  description: string | null;
  contentType: string | null;
  fileName: string | null;
  size: number | null;
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface GetArticles_nextJsBlogCollection_items {
  __typename: "NextJsBlog";
  title: string | null;
  description: string | null;
  content: GetArticles_nextJsBlogCollection_items_content | null;
  image: GetArticles_nextJsBlogCollection_items_image | null;
}

export interface GetArticles_nextJsBlogCollection {
  __typename: "NextJsBlogCollection";
  items: (GetArticles_nextJsBlogCollection_items | null)[];
}

export interface GetArticles {
  nextJsBlogCollection: GetArticles_nextJsBlogCollection | null;
}
