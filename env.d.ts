declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_CONTENTFUL_ACCESS_TOKEN: string;
      readonly REACT_APP_CONTENTFUL_SPACE_ID: string;
    }
  }
}

export {};
